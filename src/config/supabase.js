
// DYNAMIC IMPORT STRATEGY
// Prevents "White Screen" if the library fails to load at startup.

const supabaseUrl = 'https://repjqbnngjlvibswnnly.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlcGpxYm5uZ2psdmlic3dubmx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNDQ4OTcsImV4cCI6MjA4NDcyMDg5N30.eyd5XN1s8954MJG3E3QE026nxJZ7IfdSgJSfPeQoaJw'

let supabaseInstance = null;

async function getSupabase() {
    if (supabaseInstance) return supabaseInstance;

    try {
        console.log("Loading Supabase library...");
        const { createClient } = await import('@supabase/supabase-js');
        supabaseInstance = createClient(supabaseUrl, supabaseKey);
        console.log("Supabase library loaded successfully.");
        return supabaseInstance;
    } catch (error) {
        console.error("Failed to load Supabase library:", error);
        throw new Error("Failed to load login system: " + error.message);
    }
}

// Export a proxy object that mimics the Supabase API but loads lazily
export const supabase = {
    auth: {
        signInWithOAuth: async (args) => {
            try {
                const client = await getSupabase();
                return client.auth.signInWithOAuth(args);
            } catch (err) {
                alert("Critical Error: Could not load database connection.\n" + err.message);
                return { error: err };
            }
        },
        signInWithPassword: async (args) => {
            try {
                const client = await getSupabase();
                return client.auth.signInWithPassword(args);
            } catch (err) {
                return { error: err };
            }
        },
        signUp: async (args) => {
            try {
                const client = await getSupabase();
                return client.auth.signUp(args);
            } catch (err) {
                return { error: err };
            }
        },
        getSession: async () => {
            try {
                const client = await getSupabase();
                return client.auth.getSession();
            } catch { return { data: { session: null } }; }
        },
        onAuthStateChange: (callback) => {
            getSupabase().then(client => {
                client.auth.onAuthStateChange(callback);
            }).catch(console.error);

            return { data: { subscription: { unsubscribe: () => { } } } };
        },
        signOut: async () => {
            const client = await getSupabase();
            return client.auth.signOut();
        },
        getUser: async () => {
            const client = await getSupabase();
            return client.auth.getUser();
        }
    },
    from: (table) => {
        return {
            upsert: async (data, options) => {
                const client = await getSupabase();
                return client.from(table).upsert(data, options);
            },
            insert: async (data) => {
                const client = await getSupabase();
                return client.from(table).insert(data);
            },
            select: (columns) => {
                // Build and execute the query chain
                const buildAndExecuteQuery = async (operations, shouldExecuteSingle = false) => {
                    const client = await getSupabase();
                    let query = client.from(table).select(columns);

                    // Apply all chained operations
                    for (const op of operations) {
                        query = query[op.method](...op.args);
                    }

                    // If .single() was called, execute it
                    if (shouldExecuteSingle) {
                        query = query.single();
                    }

                    // Execute the query and return the result
                    return await query;
                };

                const operations = [];
                let singleCalled = false;

                const chainBuilder = {
                    eq: (column, value) => {
                        operations.push({ method: 'eq', args: [column, value] });
                        return chainBuilder;
                    },
                    single: () => {
                        singleCalled = true;
                        // Return a promise-like object
                        return {
                            then: (resolve, reject) => {
                                return buildAndExecuteQuery(operations, true).then(resolve, reject);
                            },
                            catch: (reject) => {
                                return buildAndExecuteQuery(operations, true).catch(reject);
                            }
                        };
                    },
                    then: (resolve, reject) => {
                        return buildAndExecuteQuery(operations, singleCalled).then(resolve, reject);
                    },
                    catch: (reject) => {
                        return buildAndExecuteQuery(operations, singleCalled).catch(reject);
                    }
                };

                return chainBuilder;
            }
        };
    }
};
