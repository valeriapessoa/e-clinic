import { Connection } from "mongoose";

declare global {
    namespace NodeJS {
        interface Global {
            mongo: {
                conn: Connection | null;
                promise: Promise<Connection> | null;
            };
        }
    }
}