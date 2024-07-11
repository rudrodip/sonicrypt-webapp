import { pgTable, text, integer, timestamp, boolean, primaryKey } from "drizzle-orm/pg-core"

export const User = pgTable("users", {
  email: text("email").notNull().primaryKey().unique(),
});

export const Device = pgTable("devices", {
  id: text("id").primaryKey().notNull().unique(),
  version: text("version").notNull(),
  model: text("model").notNull(),
  firmwareVersion: text("firmware_version").notNull(),
  manufactureTime: timestamp("manufacture_time").notNull(),
  verified: boolean("verified").notNull().default(false),
  verificationTime: timestamp("verification_time"),
  owner: text("owner").references(() => User.email).notNull(),
});

export const Wallet = pgTable("wallets", {
  id: text("id").primaryKey().notNull().unique(),
  address: text("address").notNull().unique(),
  provider: text("provider").notNull(),
});

export const UserWallet = pgTable("user_wallets", {
  userId: text("user_id").notNull().references(() => User.email),
  walletId: text("wallet_id").notNull().references(() => Wallet.id),
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.userId, table.walletId] }),
  }
});

export const WalletDevice = pgTable("wallet_devices", {
  walletId: text("wallet_id").notNull().references(() => Wallet.id),
  deviceId: text("device_id").notNull().references(() => Device.id),
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.walletId, table.deviceId] }),
  }
});

export const Transactions = pgTable("transactions", {
  id: text("id").primaryKey().notNull().unique(),
  sender: text("sender").notNull(),
  receiver: text("receiver").references(() => Wallet.id).notNull(),
  amount: integer("amount").notNull(),
  currency: text("currency").notNull(),
  time: timestamp("time").notNull(),
  hash: text("hash").notNull().unique(),
});