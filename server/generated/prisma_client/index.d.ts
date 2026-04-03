
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model cart_items
 * 
 */
export type cart_items = $Result.DefaultSelection<Prisma.$cart_itemsPayload>
/**
 * Model carts
 * 
 */
export type carts = $Result.DefaultSelection<Prisma.$cartsPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model inventory
 * 
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>
/**
 * Model inventory_transactions
 * 
 */
export type inventory_transactions = $Result.DefaultSelection<Prisma.$inventory_transactionsPayload>
/**
 * Model order_items
 * 
 */
export type order_items = $Result.DefaultSelection<Prisma.$order_itemsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model recipes
 * 
 */
export type recipes = $Result.DefaultSelection<Prisma.$recipesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const categories_status: {
  active: 'active',
  inactive: 'inactive'
};

export type categories_status = (typeof categories_status)[keyof typeof categories_status]


export const inventory_transactions_type: {
  import: 'import',
  export: 'export',
  adjustment: 'adjustment'
};

export type inventory_transactions_type = (typeof inventory_transactions_type)[keyof typeof inventory_transactions_type]


export const payments_method: {
  cash: 'cash',
  momo: 'momo',
  banking: 'banking',
  zalopay: 'zalopay',
  vnpay: 'vnpay'
};

export type payments_method = (typeof payments_method)[keyof typeof payments_method]


export const payments_status: {
  pending: 'pending',
  success: 'success',
  failed: 'failed',
  refunded: 'refunded'
};

export type payments_status = (typeof payments_status)[keyof typeof payments_status]


export const orders_order_status: {
  pending: 'pending',
  confirmed: 'confirmed',
  preparing: 'preparing',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type orders_order_status = (typeof orders_order_status)[keyof typeof orders_order_status]


export const users_role: {
  customer: 'customer',
  admin: 'admin'
};

export type users_role = (typeof users_role)[keyof typeof users_role]


export const inventory_status: {
  available: 'available',
  out_of_stock: 'out_of_stock'
};

export type inventory_status = (typeof inventory_status)[keyof typeof inventory_status]


export const orders_payment_status: {
  unpaid: 'unpaid',
  paid: 'paid',
  failed: 'failed',
  refunded: 'refunded'
};

export type orders_payment_status = (typeof orders_payment_status)[keyof typeof orders_payment_status]


export const products_status: {
  available: 'available',
  out_of_stock: 'out_of_stock',
  discontinued: 'discontinued'
};

export type products_status = (typeof products_status)[keyof typeof products_status]

}

export type categories_status = $Enums.categories_status

export const categories_status: typeof $Enums.categories_status

export type inventory_transactions_type = $Enums.inventory_transactions_type

export const inventory_transactions_type: typeof $Enums.inventory_transactions_type

export type payments_method = $Enums.payments_method

export const payments_method: typeof $Enums.payments_method

export type payments_status = $Enums.payments_status

export const payments_status: typeof $Enums.payments_status

export type orders_order_status = $Enums.orders_order_status

export const orders_order_status: typeof $Enums.orders_order_status

export type users_role = $Enums.users_role

export const users_role: typeof $Enums.users_role

export type inventory_status = $Enums.inventory_status

export const inventory_status: typeof $Enums.inventory_status

export type orders_payment_status = $Enums.orders_payment_status

export const orders_payment_status: typeof $Enums.orders_payment_status

export type products_status = $Enums.products_status

export const products_status: typeof $Enums.products_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Cart_items
 * const cart_items = await prisma.cart_items.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Cart_items
   * const cart_items = await prisma.cart_items.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cart_items`: Exposes CRUD operations for the **cart_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cart_items
    * const cart_items = await prisma.cart_items.findMany()
    * ```
    */
  get cart_items(): Prisma.cart_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.cartsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.inventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory_transactions`: Exposes CRUD operations for the **inventory_transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventory_transactions
    * const inventory_transactions = await prisma.inventory_transactions.findMany()
    * ```
    */
  get inventory_transactions(): Prisma.inventory_transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_items`: Exposes CRUD operations for the **order_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_items.findMany()
    * ```
    */
  get order_items(): Prisma.order_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipes`: Exposes CRUD operations for the **recipes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipes.findMany()
    * ```
    */
  get recipes(): Prisma.recipesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    cart_items: 'cart_items',
    carts: 'carts',
    categories: 'categories',
    inventory: 'inventory',
    inventory_transactions: 'inventory_transactions',
    order_items: 'order_items',
    orders: 'orders',
    payments: 'payments',
    products: 'products',
    recipes: 'recipes',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cart_items" | "carts" | "categories" | "inventory" | "inventory_transactions" | "order_items" | "orders" | "payments" | "products" | "recipes" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cart_items: {
        payload: Prisma.$cart_itemsPayload<ExtArgs>
        fields: Prisma.cart_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cart_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cart_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          findFirst: {
            args: Prisma.cart_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cart_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          findMany: {
            args: Prisma.cart_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>[]
          }
          create: {
            args: Prisma.cart_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          createMany: {
            args: Prisma.cart_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cart_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          update: {
            args: Prisma.cart_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          deleteMany: {
            args: Prisma.cart_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cart_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cart_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          aggregate: {
            args: Prisma.Cart_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart_items>
          }
          groupBy: {
            args: Prisma.cart_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cart_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cart_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Cart_itemsCountAggregateOutputType> | number
          }
        }
      }
      carts: {
        payload: Prisma.$cartsPayload<ExtArgs>
        fields: Prisma.cartsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findFirst: {
            args: Prisma.cartsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findMany: {
            args: Prisma.cartsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          create: {
            args: Prisma.cartsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          createMany: {
            args: Prisma.cartsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cartsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          update: {
            args: Prisma.cartsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          deleteMany: {
            args: Prisma.cartsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cartsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarts>
          }
          groupBy: {
            args: Prisma.cartsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartsCountArgs<ExtArgs>
            result: $Utils.Optional<CartsCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>
        fields: Prisma.inventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      inventory_transactions: {
        payload: Prisma.$inventory_transactionsPayload<ExtArgs>
        fields: Prisma.inventory_transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventory_transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventory_transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>
          }
          findFirst: {
            args: Prisma.inventory_transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventory_transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>
          }
          findMany: {
            args: Prisma.inventory_transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>[]
          }
          create: {
            args: Prisma.inventory_transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>
          }
          createMany: {
            args: Prisma.inventory_transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.inventory_transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>
          }
          update: {
            args: Prisma.inventory_transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>
          }
          deleteMany: {
            args: Prisma.inventory_transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventory_transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inventory_transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>
          }
          aggregate: {
            args: Prisma.Inventory_transactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory_transactions>
          }
          groupBy: {
            args: Prisma.inventory_transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Inventory_transactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventory_transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<Inventory_transactionsCountAggregateOutputType> | number
          }
        }
      }
      order_items: {
        payload: Prisma.$order_itemsPayload<ExtArgs>
        fields: Prisma.order_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findFirst: {
            args: Prisma.order_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findMany: {
            args: Prisma.order_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          create: {
            args: Prisma.order_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          createMany: {
            args: Prisma.order_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.order_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          update: {
            args: Prisma.order_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          deleteMany: {
            args: Prisma.order_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          aggregate: {
            args: Prisma.Order_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_items>
          }
          groupBy: {
            args: Prisma.order_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      recipes: {
        payload: Prisma.$recipesPayload<ExtArgs>
        fields: Prisma.recipesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recipesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recipesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          findFirst: {
            args: Prisma.recipesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recipesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          findMany: {
            args: Prisma.recipesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>[]
          }
          create: {
            args: Prisma.recipesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          createMany: {
            args: Prisma.recipesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.recipesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          update: {
            args: Prisma.recipesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          deleteMany: {
            args: Prisma.recipesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recipesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.recipesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          aggregate: {
            args: Prisma.RecipesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipes>
          }
          groupBy: {
            args: Prisma.recipesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipesGroupByOutputType>[]
          }
          count: {
            args: Prisma.recipesCountArgs<ExtArgs>
            result: $Utils.Optional<RecipesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    cart_items?: cart_itemsOmit
    carts?: cartsOmit
    categories?: categoriesOmit
    inventory?: inventoryOmit
    inventory_transactions?: inventory_transactionsOmit
    order_items?: order_itemsOmit
    orders?: ordersOmit
    payments?: paymentsOmit
    products?: productsOmit
    recipes?: recipesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CartsCountOutputType
   */

  export type CartsCountOutputType = {
    cart_items: number
  }

  export type CartsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | CartsCountOutputTypeCountCart_itemsArgs
  }

  // Custom InputTypes
  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsCountOutputType
     */
    select?: CartsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    inventory_transactions: number
    recipes: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory_transactions?: boolean | InventoryCountOutputTypeCountInventory_transactionsArgs
    recipes?: boolean | InventoryCountOutputTypeCountRecipesArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountInventory_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventory_transactionsWhereInput
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipesWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_items: number
    payments: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
    payments?: boolean | OrdersCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    cart_items: number
    order_items: number
    recipes: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | ProductsCountOutputTypeCountCart_itemsArgs
    order_items?: boolean | ProductsCountOutputTypeCountOrder_itemsArgs
    recipes?: boolean | ProductsCountOutputTypeCountRecipesArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    inventory_transactions: number
    orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory_transactions?: boolean | UsersCountOutputTypeCountInventory_transactionsArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInventory_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventory_transactionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cart_items
   */

  export type AggregateCart_items = {
    _count: Cart_itemsCountAggregateOutputType | null
    _avg: Cart_itemsAvgAggregateOutputType | null
    _sum: Cart_itemsSumAggregateOutputType | null
    _min: Cart_itemsMinAggregateOutputType | null
    _max: Cart_itemsMaxAggregateOutputType | null
  }

  export type Cart_itemsAvgAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    subtotal: Decimal | null
  }

  export type Cart_itemsSumAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    subtotal: Decimal | null
  }

  export type Cart_itemsMinAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    subtotal: Decimal | null
  }

  export type Cart_itemsMaxAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    subtotal: Decimal | null
  }

  export type Cart_itemsCountAggregateOutputType = {
    id: number
    cart_id: number
    product_id: number
    quantity: number
    unit_price: number
    subtotal: number
    _all: number
  }


  export type Cart_itemsAvgAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
  }

  export type Cart_itemsSumAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
  }

  export type Cart_itemsMinAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
  }

  export type Cart_itemsMaxAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
  }

  export type Cart_itemsCountAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
    _all?: true
  }

  export type Cart_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_items to aggregate.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cart_items
    **/
    _count?: true | Cart_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cart_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cart_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cart_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cart_itemsMaxAggregateInputType
  }

  export type GetCart_itemsAggregateType<T extends Cart_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCart_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart_items[P]>
      : GetScalarType<T[P], AggregateCart_items[P]>
  }




  export type cart_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithAggregationInput | cart_itemsOrderByWithAggregationInput[]
    by: Cart_itemsScalarFieldEnum[] | Cart_itemsScalarFieldEnum
    having?: cart_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cart_itemsCountAggregateInputType | true
    _avg?: Cart_itemsAvgAggregateInputType
    _sum?: Cart_itemsSumAggregateInputType
    _min?: Cart_itemsMinAggregateInputType
    _max?: Cart_itemsMaxAggregateInputType
  }

  export type Cart_itemsGroupByOutputType = {
    id: number
    cart_id: number
    product_id: number
    quantity: number
    unit_price: Decimal
    subtotal: Decimal
    _count: Cart_itemsCountAggregateOutputType | null
    _avg: Cart_itemsAvgAggregateOutputType | null
    _sum: Cart_itemsSumAggregateOutputType | null
    _min: Cart_itemsMinAggregateOutputType | null
    _max: Cart_itemsMaxAggregateOutputType | null
  }

  type GetCart_itemsGroupByPayload<T extends cart_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cart_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cart_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cart_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Cart_itemsGroupByOutputType[P]>
        }
      >
    >


  export type cart_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    subtotal?: boolean
    carts?: boolean | cartsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart_items"]>



  export type cart_itemsSelectScalar = {
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    subtotal?: boolean
  }

  export type cart_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cart_id" | "product_id" | "quantity" | "unit_price" | "subtotal", ExtArgs["result"]["cart_items"]>
  export type cart_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | cartsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $cart_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart_items"
    objects: {
      carts: Prisma.$cartsPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cart_id: number
      product_id: number
      quantity: number
      unit_price: Prisma.Decimal
      subtotal: Prisma.Decimal
    }, ExtArgs["result"]["cart_items"]>
    composites: {}
  }

  type cart_itemsGetPayload<S extends boolean | null | undefined | cart_itemsDefaultArgs> = $Result.GetResult<Prisma.$cart_itemsPayload, S>

  type cart_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cart_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cart_itemsCountAggregateInputType | true
    }

  export interface cart_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart_items'], meta: { name: 'cart_items' } }
    /**
     * Find zero or one Cart_items that matches the filter.
     * @param {cart_itemsFindUniqueArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cart_itemsFindUniqueArgs>(args: SelectSubset<T, cart_itemsFindUniqueArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cart_itemsFindUniqueOrThrowArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cart_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, cart_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindFirstArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cart_itemsFindFirstArgs>(args?: SelectSubset<T, cart_itemsFindFirstArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindFirstOrThrowArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cart_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, cart_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cart_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cart_items
     * const cart_items = await prisma.cart_items.findMany()
     * 
     * // Get first 10 Cart_items
     * const cart_items = await prisma.cart_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cart_itemsWithIdOnly = await prisma.cart_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cart_itemsFindManyArgs>(args?: SelectSubset<T, cart_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart_items.
     * @param {cart_itemsCreateArgs} args - Arguments to create a Cart_items.
     * @example
     * // Create one Cart_items
     * const Cart_items = await prisma.cart_items.create({
     *   data: {
     *     // ... data to create a Cart_items
     *   }
     * })
     * 
     */
    create<T extends cart_itemsCreateArgs>(args: SelectSubset<T, cart_itemsCreateArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cart_items.
     * @param {cart_itemsCreateManyArgs} args - Arguments to create many Cart_items.
     * @example
     * // Create many Cart_items
     * const cart_items = await prisma.cart_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cart_itemsCreateManyArgs>(args?: SelectSubset<T, cart_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart_items.
     * @param {cart_itemsDeleteArgs} args - Arguments to delete one Cart_items.
     * @example
     * // Delete one Cart_items
     * const Cart_items = await prisma.cart_items.delete({
     *   where: {
     *     // ... filter to delete one Cart_items
     *   }
     * })
     * 
     */
    delete<T extends cart_itemsDeleteArgs>(args: SelectSubset<T, cart_itemsDeleteArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart_items.
     * @param {cart_itemsUpdateArgs} args - Arguments to update one Cart_items.
     * @example
     * // Update one Cart_items
     * const cart_items = await prisma.cart_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cart_itemsUpdateArgs>(args: SelectSubset<T, cart_itemsUpdateArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cart_items.
     * @param {cart_itemsDeleteManyArgs} args - Arguments to filter Cart_items to delete.
     * @example
     * // Delete a few Cart_items
     * const { count } = await prisma.cart_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cart_itemsDeleteManyArgs>(args?: SelectSubset<T, cart_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cart_items
     * const cart_items = await prisma.cart_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cart_itemsUpdateManyArgs>(args: SelectSubset<T, cart_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart_items.
     * @param {cart_itemsUpsertArgs} args - Arguments to update or create a Cart_items.
     * @example
     * // Update or create a Cart_items
     * const cart_items = await prisma.cart_items.upsert({
     *   create: {
     *     // ... data to create a Cart_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart_items we want to update
     *   }
     * })
     */
    upsert<T extends cart_itemsUpsertArgs>(args: SelectSubset<T, cart_itemsUpsertArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsCountArgs} args - Arguments to filter Cart_items to count.
     * @example
     * // Count the number of Cart_items
     * const count = await prisma.cart_items.count({
     *   where: {
     *     // ... the filter for the Cart_items we want to count
     *   }
     * })
    **/
    count<T extends cart_itemsCountArgs>(
      args?: Subset<T, cart_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cart_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cart_itemsAggregateArgs>(args: Subset<T, Cart_itemsAggregateArgs>): Prisma.PrismaPromise<GetCart_itemsAggregateType<T>>

    /**
     * Group by Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cart_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cart_itemsGroupByArgs['orderBy'] }
        : { orderBy?: cart_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cart_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCart_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart_items model
   */
  readonly fields: cart_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cart_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carts<T extends cartsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cartsDefaultArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cart_items model
   */
  interface cart_itemsFieldRefs {
    readonly id: FieldRef<"cart_items", 'Int'>
    readonly cart_id: FieldRef<"cart_items", 'Int'>
    readonly product_id: FieldRef<"cart_items", 'Int'>
    readonly quantity: FieldRef<"cart_items", 'Int'>
    readonly unit_price: FieldRef<"cart_items", 'Decimal'>
    readonly subtotal: FieldRef<"cart_items", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * cart_items findUnique
   */
  export type cart_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items findUniqueOrThrow
   */
  export type cart_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items findFirst
   */
  export type cart_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_items.
     */
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items findFirstOrThrow
   */
  export type cart_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_items.
     */
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items findMany
   */
  export type cart_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_items.
     */
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items create
   */
  export type cart_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a cart_items.
     */
    data: XOR<cart_itemsCreateInput, cart_itemsUncheckedCreateInput>
  }

  /**
   * cart_items createMany
   */
  export type cart_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cart_items.
     */
    data: cart_itemsCreateManyInput | cart_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart_items update
   */
  export type cart_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a cart_items.
     */
    data: XOR<cart_itemsUpdateInput, cart_itemsUncheckedUpdateInput>
    /**
     * Choose, which cart_items to update.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items updateMany
   */
  export type cart_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cart_items.
     */
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyInput>
    /**
     * Filter which cart_items to update
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to update.
     */
    limit?: number
  }

  /**
   * cart_items upsert
   */
  export type cart_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the cart_items to update in case it exists.
     */
    where: cart_itemsWhereUniqueInput
    /**
     * In case the cart_items found by the `where` argument doesn't exist, create a new cart_items with this data.
     */
    create: XOR<cart_itemsCreateInput, cart_itemsUncheckedCreateInput>
    /**
     * In case the cart_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cart_itemsUpdateInput, cart_itemsUncheckedUpdateInput>
  }

  /**
   * cart_items delete
   */
  export type cart_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter which cart_items to delete.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items deleteMany
   */
  export type cart_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_items to delete
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to delete.
     */
    limit?: number
  }

  /**
   * cart_items without action
   */
  export type cart_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
  }


  /**
   * Model carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CartsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CartsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartsCountAggregateOutputType = {
    id: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CartsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartsMinAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CartsMaxAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CartsCountAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CartsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to aggregate.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type cartsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartsWhereInput
    orderBy?: cartsOrderByWithAggregationInput | cartsOrderByWithAggregationInput[]
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum
    having?: cartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsCountAggregateInputType | true
    _avg?: CartsAvgAggregateInputType
    _sum?: CartsSumAggregateInputType
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }

  export type CartsGroupByOutputType = {
    id: number
    user_id: number
    created_at: Date | null
    updated_at: Date | null
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends cartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type cartsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart_items?: boolean | carts$cart_itemsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>



  export type cartsSelectScalar = {
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type cartsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["carts"]>
  export type cartsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | carts$cart_itemsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cartsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carts"
    objects: {
      cart_items: Prisma.$cart_itemsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["carts"]>
    composites: {}
  }

  type cartsGetPayload<S extends boolean | null | undefined | cartsDefaultArgs> = $Result.GetResult<Prisma.$cartsPayload, S>

  type cartsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface cartsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carts'], meta: { name: 'carts' } }
    /**
     * Find zero or one Carts that matches the filter.
     * @param {cartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartsFindUniqueArgs>(args: SelectSubset<T, cartsFindUniqueArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartsFindUniqueOrThrowArgs>(args: SelectSubset<T, cartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartsFindFirstArgs>(args?: SelectSubset<T, cartsFindFirstArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartsFindFirstOrThrowArgs>(args?: SelectSubset<T, cartsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartsWithIdOnly = await prisma.carts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartsFindManyArgs>(args?: SelectSubset<T, cartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carts.
     * @param {cartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
     */
    create<T extends cartsCreateArgs>(args: SelectSubset<T, cartsCreateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartsCreateManyArgs>(args?: SelectSubset<T, cartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carts.
     * @param {cartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
     */
    delete<T extends cartsDeleteArgs>(args: SelectSubset<T, cartsDeleteArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carts.
     * @param {cartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartsUpdateArgs>(args: SelectSubset<T, cartsUpdateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartsDeleteManyArgs>(args?: SelectSubset<T, cartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartsUpdateManyArgs>(args: SelectSubset<T, cartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carts.
     * @param {cartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends cartsUpsertArgs>(args: SelectSubset<T, cartsUpsertArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartsCountArgs>(
      args?: Subset<T, cartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartsGroupByArgs['orderBy'] }
        : { orderBy?: cartsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carts model
   */
  readonly fields: cartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart_items<T extends carts$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, carts$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the carts model
   */
  interface cartsFieldRefs {
    readonly id: FieldRef<"carts", 'Int'>
    readonly user_id: FieldRef<"carts", 'Int'>
    readonly created_at: FieldRef<"carts", 'DateTime'>
    readonly updated_at: FieldRef<"carts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * carts findUnique
   */
  export type cartsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findUniqueOrThrow
   */
  export type cartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findFirst
   */
  export type cartsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findFirstOrThrow
   */
  export type cartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findMany
   */
  export type cartsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts create
   */
  export type cartsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The data needed to create a carts.
     */
    data: XOR<cartsCreateInput, cartsUncheckedCreateInput>
  }

  /**
   * carts createMany
   */
  export type cartsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartsCreateManyInput | cartsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carts update
   */
  export type cartsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The data needed to update a carts.
     */
    data: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
    /**
     * Choose, which carts to update.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts updateMany
   */
  export type cartsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * carts upsert
   */
  export type cartsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The filter to search for the carts to update in case it exists.
     */
    where: cartsWhereUniqueInput
    /**
     * In case the carts found by the `where` argument doesn't exist, create a new carts with this data.
     */
    create: XOR<cartsCreateInput, cartsUncheckedCreateInput>
    /**
     * In case the carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
  }

  /**
   * carts delete
   */
  export type cartsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter which carts to delete.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts deleteMany
   */
  export type cartsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * carts.cart_items
   */
  export type carts$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    cursor?: cart_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * carts without action
   */
  export type cartsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.categories_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.categories_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    status: $Enums.categories_status | null
    created_at: Date | null
    updated_at: Date | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>



  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "created_at" | "updated_at", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: $Enums.categories_status | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
    readonly status: FieldRef<"categories", 'categories_status'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
    readonly updated_at: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    id: number | null
    quantity: Decimal | null
    min_quantity: Decimal | null
    cost_price: Decimal | null
  }

  export type InventorySumAggregateOutputType = {
    id: number | null
    quantity: Decimal | null
    min_quantity: Decimal | null
    cost_price: Decimal | null
  }

  export type InventoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    unit: string | null
    quantity: Decimal | null
    min_quantity: Decimal | null
    cost_price: Decimal | null
    supplier_name: string | null
    status: $Enums.inventory_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    unit: string | null
    quantity: Decimal | null
    min_quantity: Decimal | null
    cost_price: Decimal | null
    supplier_name: string | null
    status: $Enums.inventory_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    name: number
    unit: number
    quantity: number
    min_quantity: number
    cost_price: number
    supplier_name: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    id?: true
    quantity?: true
    min_quantity?: true
    cost_price?: true
  }

  export type InventorySumAggregateInputType = {
    id?: true
    quantity?: true
    min_quantity?: true
    cost_price?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    quantity?: true
    min_quantity?: true
    cost_price?: true
    supplier_name?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    quantity?: true
    min_quantity?: true
    cost_price?: true
    supplier_name?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    quantity?: true
    min_quantity?: true
    cost_price?: true
    supplier_name?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: inventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: number
    name: string
    unit: string
    quantity: Decimal | null
    min_quantity: Decimal | null
    cost_price: Decimal | null
    supplier_name: string | null
    status: $Enums.inventory_status | null
    created_at: Date | null
    updated_at: Date | null
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    quantity?: boolean
    min_quantity?: boolean
    cost_price?: boolean
    supplier_name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    inventory_transactions?: boolean | inventory$inventory_transactionsArgs<ExtArgs>
    recipes?: boolean | inventory$recipesArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>



  export type inventorySelectScalar = {
    id?: boolean
    name?: boolean
    unit?: boolean
    quantity?: boolean
    min_quantity?: boolean
    cost_price?: boolean
    supplier_name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type inventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "unit" | "quantity" | "min_quantity" | "cost_price" | "supplier_name" | "status" | "created_at" | "updated_at", ExtArgs["result"]["inventory"]>
  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory_transactions?: boolean | inventory$inventory_transactionsArgs<ExtArgs>
    recipes?: boolean | inventory$recipesArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory"
    objects: {
      inventory_transactions: Prisma.$inventory_transactionsPayload<ExtArgs>[]
      recipes: Prisma.$recipesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      unit: string
      quantity: Prisma.Decimal | null
      min_quantity: Prisma.Decimal | null
      cost_price: Prisma.Decimal | null
      supplier_name: string | null
      status: $Enums.inventory_status | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<Prisma.$inventoryPayload, S>

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory'], meta: { name: 'inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventoryFindUniqueArgs>(args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventoryFindFirstArgs>(args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inventoryFindManyArgs>(args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends inventoryCreateArgs>(args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventoryCreateManyArgs>(args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends inventoryDeleteArgs>(args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventoryUpdateArgs>(args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventoryDeleteManyArgs>(args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventoryUpdateManyArgs>(args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends inventoryUpsertArgs>(args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory model
   */
  readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory_transactions<T extends inventory$inventory_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, inventory$inventory_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipes<T extends inventory$recipesArgs<ExtArgs> = {}>(args?: Subset<T, inventory$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventory model
   */
  interface inventoryFieldRefs {
    readonly id: FieldRef<"inventory", 'Int'>
    readonly name: FieldRef<"inventory", 'String'>
    readonly unit: FieldRef<"inventory", 'String'>
    readonly quantity: FieldRef<"inventory", 'Decimal'>
    readonly min_quantity: FieldRef<"inventory", 'Decimal'>
    readonly cost_price: FieldRef<"inventory", 'Decimal'>
    readonly supplier_name: FieldRef<"inventory", 'String'>
    readonly status: FieldRef<"inventory", 'inventory_status'>
    readonly created_at: FieldRef<"inventory", 'DateTime'>
    readonly updated_at: FieldRef<"inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
  }

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
  }

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
  }

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to delete.
     */
    limit?: number
  }

  /**
   * inventory.inventory_transactions
   */
  export type inventory$inventory_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    where?: inventory_transactionsWhereInput
    orderBy?: inventory_transactionsOrderByWithRelationInput | inventory_transactionsOrderByWithRelationInput[]
    cursor?: inventory_transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Inventory_transactionsScalarFieldEnum | Inventory_transactionsScalarFieldEnum[]
  }

  /**
   * inventory.recipes
   */
  export type inventory$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    where?: recipesWhereInput
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    cursor?: recipesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
  }


  /**
   * Model inventory_transactions
   */

  export type AggregateInventory_transactions = {
    _count: Inventory_transactionsCountAggregateOutputType | null
    _avg: Inventory_transactionsAvgAggregateOutputType | null
    _sum: Inventory_transactionsSumAggregateOutputType | null
    _min: Inventory_transactionsMinAggregateOutputType | null
    _max: Inventory_transactionsMaxAggregateOutputType | null
  }

  export type Inventory_transactionsAvgAggregateOutputType = {
    id: number | null
    inventory_id: number | null
    quantity: Decimal | null
    created_by: number | null
  }

  export type Inventory_transactionsSumAggregateOutputType = {
    id: number | null
    inventory_id: number | null
    quantity: Decimal | null
    created_by: number | null
  }

  export type Inventory_transactionsMinAggregateOutputType = {
    id: number | null
    inventory_id: number | null
    type: $Enums.inventory_transactions_type | null
    quantity: Decimal | null
    note: string | null
    created_by: number | null
    created_at: Date | null
  }

  export type Inventory_transactionsMaxAggregateOutputType = {
    id: number | null
    inventory_id: number | null
    type: $Enums.inventory_transactions_type | null
    quantity: Decimal | null
    note: string | null
    created_by: number | null
    created_at: Date | null
  }

  export type Inventory_transactionsCountAggregateOutputType = {
    id: number
    inventory_id: number
    type: number
    quantity: number
    note: number
    created_by: number
    created_at: number
    _all: number
  }


  export type Inventory_transactionsAvgAggregateInputType = {
    id?: true
    inventory_id?: true
    quantity?: true
    created_by?: true
  }

  export type Inventory_transactionsSumAggregateInputType = {
    id?: true
    inventory_id?: true
    quantity?: true
    created_by?: true
  }

  export type Inventory_transactionsMinAggregateInputType = {
    id?: true
    inventory_id?: true
    type?: true
    quantity?: true
    note?: true
    created_by?: true
    created_at?: true
  }

  export type Inventory_transactionsMaxAggregateInputType = {
    id?: true
    inventory_id?: true
    type?: true
    quantity?: true
    note?: true
    created_by?: true
    created_at?: true
  }

  export type Inventory_transactionsCountAggregateInputType = {
    id?: true
    inventory_id?: true
    type?: true
    quantity?: true
    note?: true
    created_by?: true
    created_at?: true
    _all?: true
  }

  export type Inventory_transactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_transactions to aggregate.
     */
    where?: inventory_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_transactions to fetch.
     */
    orderBy?: inventory_transactionsOrderByWithRelationInput | inventory_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventory_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventory_transactions
    **/
    _count?: true | Inventory_transactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Inventory_transactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Inventory_transactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inventory_transactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inventory_transactionsMaxAggregateInputType
  }

  export type GetInventory_transactionsAggregateType<T extends Inventory_transactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory_transactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory_transactions[P]>
      : GetScalarType<T[P], AggregateInventory_transactions[P]>
  }




  export type inventory_transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventory_transactionsWhereInput
    orderBy?: inventory_transactionsOrderByWithAggregationInput | inventory_transactionsOrderByWithAggregationInput[]
    by: Inventory_transactionsScalarFieldEnum[] | Inventory_transactionsScalarFieldEnum
    having?: inventory_transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inventory_transactionsCountAggregateInputType | true
    _avg?: Inventory_transactionsAvgAggregateInputType
    _sum?: Inventory_transactionsSumAggregateInputType
    _min?: Inventory_transactionsMinAggregateInputType
    _max?: Inventory_transactionsMaxAggregateInputType
  }

  export type Inventory_transactionsGroupByOutputType = {
    id: number
    inventory_id: number
    type: $Enums.inventory_transactions_type
    quantity: Decimal
    note: string | null
    created_by: number | null
    created_at: Date | null
    _count: Inventory_transactionsCountAggregateOutputType | null
    _avg: Inventory_transactionsAvgAggregateOutputType | null
    _sum: Inventory_transactionsSumAggregateOutputType | null
    _min: Inventory_transactionsMinAggregateOutputType | null
    _max: Inventory_transactionsMaxAggregateOutputType | null
  }

  type GetInventory_transactionsGroupByPayload<T extends inventory_transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inventory_transactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inventory_transactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inventory_transactionsGroupByOutputType[P]>
            : GetScalarType<T[P], Inventory_transactionsGroupByOutputType[P]>
        }
      >
    >


  export type inventory_transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventory_id?: boolean
    type?: boolean
    quantity?: boolean
    note?: boolean
    created_by?: boolean
    created_at?: boolean
    inventory?: boolean | inventoryDefaultArgs<ExtArgs>
    users?: boolean | inventory_transactions$usersArgs<ExtArgs>
  }, ExtArgs["result"]["inventory_transactions"]>



  export type inventory_transactionsSelectScalar = {
    id?: boolean
    inventory_id?: boolean
    type?: boolean
    quantity?: boolean
    note?: boolean
    created_by?: boolean
    created_at?: boolean
  }

  export type inventory_transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inventory_id" | "type" | "quantity" | "note" | "created_by" | "created_at", ExtArgs["result"]["inventory_transactions"]>
  export type inventory_transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | inventoryDefaultArgs<ExtArgs>
    users?: boolean | inventory_transactions$usersArgs<ExtArgs>
  }

  export type $inventory_transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory_transactions"
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inventory_id: number
      type: $Enums.inventory_transactions_type
      quantity: Prisma.Decimal
      note: string | null
      created_by: number | null
      created_at: Date | null
    }, ExtArgs["result"]["inventory_transactions"]>
    composites: {}
  }

  type inventory_transactionsGetPayload<S extends boolean | null | undefined | inventory_transactionsDefaultArgs> = $Result.GetResult<Prisma.$inventory_transactionsPayload, S>

  type inventory_transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventory_transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Inventory_transactionsCountAggregateInputType | true
    }

  export interface inventory_transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory_transactions'], meta: { name: 'inventory_transactions' } }
    /**
     * Find zero or one Inventory_transactions that matches the filter.
     * @param {inventory_transactionsFindUniqueArgs} args - Arguments to find a Inventory_transactions
     * @example
     * // Get one Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventory_transactionsFindUniqueArgs>(args: SelectSubset<T, inventory_transactionsFindUniqueArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory_transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventory_transactionsFindUniqueOrThrowArgs} args - Arguments to find a Inventory_transactions
     * @example
     * // Get one Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventory_transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, inventory_transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_transactionsFindFirstArgs} args - Arguments to find a Inventory_transactions
     * @example
     * // Get one Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventory_transactionsFindFirstArgs>(args?: SelectSubset<T, inventory_transactionsFindFirstArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory_transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_transactionsFindFirstOrThrowArgs} args - Arguments to find a Inventory_transactions
     * @example
     * // Get one Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventory_transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, inventory_transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventory_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.findMany()
     * 
     * // Get first 10 Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventory_transactionsWithIdOnly = await prisma.inventory_transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inventory_transactionsFindManyArgs>(args?: SelectSubset<T, inventory_transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory_transactions.
     * @param {inventory_transactionsCreateArgs} args - Arguments to create a Inventory_transactions.
     * @example
     * // Create one Inventory_transactions
     * const Inventory_transactions = await prisma.inventory_transactions.create({
     *   data: {
     *     // ... data to create a Inventory_transactions
     *   }
     * })
     * 
     */
    create<T extends inventory_transactionsCreateArgs>(args: SelectSubset<T, inventory_transactionsCreateArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventory_transactions.
     * @param {inventory_transactionsCreateManyArgs} args - Arguments to create many Inventory_transactions.
     * @example
     * // Create many Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventory_transactionsCreateManyArgs>(args?: SelectSubset<T, inventory_transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory_transactions.
     * @param {inventory_transactionsDeleteArgs} args - Arguments to delete one Inventory_transactions.
     * @example
     * // Delete one Inventory_transactions
     * const Inventory_transactions = await prisma.inventory_transactions.delete({
     *   where: {
     *     // ... filter to delete one Inventory_transactions
     *   }
     * })
     * 
     */
    delete<T extends inventory_transactionsDeleteArgs>(args: SelectSubset<T, inventory_transactionsDeleteArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory_transactions.
     * @param {inventory_transactionsUpdateArgs} args - Arguments to update one Inventory_transactions.
     * @example
     * // Update one Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventory_transactionsUpdateArgs>(args: SelectSubset<T, inventory_transactionsUpdateArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventory_transactions.
     * @param {inventory_transactionsDeleteManyArgs} args - Arguments to filter Inventory_transactions to delete.
     * @example
     * // Delete a few Inventory_transactions
     * const { count } = await prisma.inventory_transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventory_transactionsDeleteManyArgs>(args?: SelectSubset<T, inventory_transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventory_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventory_transactionsUpdateManyArgs>(args: SelectSubset<T, inventory_transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory_transactions.
     * @param {inventory_transactionsUpsertArgs} args - Arguments to update or create a Inventory_transactions.
     * @example
     * // Update or create a Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.upsert({
     *   create: {
     *     // ... data to create a Inventory_transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory_transactions we want to update
     *   }
     * })
     */
    upsert<T extends inventory_transactionsUpsertArgs>(args: SelectSubset<T, inventory_transactionsUpsertArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventory_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_transactionsCountArgs} args - Arguments to filter Inventory_transactions to count.
     * @example
     * // Count the number of Inventory_transactions
     * const count = await prisma.inventory_transactions.count({
     *   where: {
     *     // ... the filter for the Inventory_transactions we want to count
     *   }
     * })
    **/
    count<T extends inventory_transactionsCountArgs>(
      args?: Subset<T, inventory_transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inventory_transactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inventory_transactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Inventory_transactionsAggregateArgs>(args: Subset<T, Inventory_transactionsAggregateArgs>): Prisma.PrismaPromise<GetInventory_transactionsAggregateType<T>>

    /**
     * Group by Inventory_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_transactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventory_transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventory_transactionsGroupByArgs['orderBy'] }
        : { orderBy?: inventory_transactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventory_transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventory_transactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory_transactions model
   */
  readonly fields: inventory_transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory_transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventory_transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends inventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, inventoryDefaultArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends inventory_transactions$usersArgs<ExtArgs> = {}>(args?: Subset<T, inventory_transactions$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventory_transactions model
   */
  interface inventory_transactionsFieldRefs {
    readonly id: FieldRef<"inventory_transactions", 'Int'>
    readonly inventory_id: FieldRef<"inventory_transactions", 'Int'>
    readonly type: FieldRef<"inventory_transactions", 'inventory_transactions_type'>
    readonly quantity: FieldRef<"inventory_transactions", 'Decimal'>
    readonly note: FieldRef<"inventory_transactions", 'String'>
    readonly created_by: FieldRef<"inventory_transactions", 'Int'>
    readonly created_at: FieldRef<"inventory_transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inventory_transactions findUnique
   */
  export type inventory_transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which inventory_transactions to fetch.
     */
    where: inventory_transactionsWhereUniqueInput
  }

  /**
   * inventory_transactions findUniqueOrThrow
   */
  export type inventory_transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which inventory_transactions to fetch.
     */
    where: inventory_transactionsWhereUniqueInput
  }

  /**
   * inventory_transactions findFirst
   */
  export type inventory_transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which inventory_transactions to fetch.
     */
    where?: inventory_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_transactions to fetch.
     */
    orderBy?: inventory_transactionsOrderByWithRelationInput | inventory_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventory_transactions.
     */
    cursor?: inventory_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventory_transactions.
     */
    distinct?: Inventory_transactionsScalarFieldEnum | Inventory_transactionsScalarFieldEnum[]
  }

  /**
   * inventory_transactions findFirstOrThrow
   */
  export type inventory_transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which inventory_transactions to fetch.
     */
    where?: inventory_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_transactions to fetch.
     */
    orderBy?: inventory_transactionsOrderByWithRelationInput | inventory_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventory_transactions.
     */
    cursor?: inventory_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventory_transactions.
     */
    distinct?: Inventory_transactionsScalarFieldEnum | Inventory_transactionsScalarFieldEnum[]
  }

  /**
   * inventory_transactions findMany
   */
  export type inventory_transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which inventory_transactions to fetch.
     */
    where?: inventory_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_transactions to fetch.
     */
    orderBy?: inventory_transactionsOrderByWithRelationInput | inventory_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventory_transactions.
     */
    cursor?: inventory_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventory_transactions.
     */
    distinct?: Inventory_transactionsScalarFieldEnum | Inventory_transactionsScalarFieldEnum[]
  }

  /**
   * inventory_transactions create
   */
  export type inventory_transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a inventory_transactions.
     */
    data: XOR<inventory_transactionsCreateInput, inventory_transactionsUncheckedCreateInput>
  }

  /**
   * inventory_transactions createMany
   */
  export type inventory_transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventory_transactions.
     */
    data: inventory_transactionsCreateManyInput | inventory_transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory_transactions update
   */
  export type inventory_transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a inventory_transactions.
     */
    data: XOR<inventory_transactionsUpdateInput, inventory_transactionsUncheckedUpdateInput>
    /**
     * Choose, which inventory_transactions to update.
     */
    where: inventory_transactionsWhereUniqueInput
  }

  /**
   * inventory_transactions updateMany
   */
  export type inventory_transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventory_transactions.
     */
    data: XOR<inventory_transactionsUpdateManyMutationInput, inventory_transactionsUncheckedUpdateManyInput>
    /**
     * Filter which inventory_transactions to update
     */
    where?: inventory_transactionsWhereInput
    /**
     * Limit how many inventory_transactions to update.
     */
    limit?: number
  }

  /**
   * inventory_transactions upsert
   */
  export type inventory_transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the inventory_transactions to update in case it exists.
     */
    where: inventory_transactionsWhereUniqueInput
    /**
     * In case the inventory_transactions found by the `where` argument doesn't exist, create a new inventory_transactions with this data.
     */
    create: XOR<inventory_transactionsCreateInput, inventory_transactionsUncheckedCreateInput>
    /**
     * In case the inventory_transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventory_transactionsUpdateInput, inventory_transactionsUncheckedUpdateInput>
  }

  /**
   * inventory_transactions delete
   */
  export type inventory_transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * Filter which inventory_transactions to delete.
     */
    where: inventory_transactionsWhereUniqueInput
  }

  /**
   * inventory_transactions deleteMany
   */
  export type inventory_transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_transactions to delete
     */
    where?: inventory_transactionsWhereInput
    /**
     * Limit how many inventory_transactions to delete.
     */
    limit?: number
  }

  /**
   * inventory_transactions.users
   */
  export type inventory_transactions$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * inventory_transactions without action
   */
  export type inventory_transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
  }


  /**
   * Model order_items
   */

  export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  export type Order_itemsAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    subtotal: Decimal | null
  }

  export type Order_itemsSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    subtotal: Decimal | null
  }

  export type Order_itemsMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    subtotal: Decimal | null
  }

  export type Order_itemsMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    subtotal: Decimal | null
  }

  export type Order_itemsCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    unit_price: number
    subtotal: number
    _all: number
  }


  export type Order_itemsAvgAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
  }

  export type Order_itemsSumAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
  }

  export type Order_itemsMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
  }

  export type Order_itemsMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
  }

  export type Order_itemsCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    subtotal?: true
    _all?: true
  }

  export type Order_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to aggregate.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemsMaxAggregateInputType
  }

  export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items[P]>
      : GetScalarType<T[P], AggregateOrder_items[P]>
  }




  export type order_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithAggregationInput | order_itemsOrderByWithAggregationInput[]
    by: Order_itemsScalarFieldEnum[] | Order_itemsScalarFieldEnum
    having?: order_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemsCountAggregateInputType | true
    _avg?: Order_itemsAvgAggregateInputType
    _sum?: Order_itemsSumAggregateInputType
    _min?: Order_itemsMinAggregateInputType
    _max?: Order_itemsMaxAggregateInputType
  }

  export type Order_itemsGroupByOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    unit_price: Decimal
    subtotal: Decimal
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
        }
      >
    >


  export type order_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    subtotal?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>



  export type order_itemsSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    subtotal?: boolean
  }

  export type order_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "quantity" | "unit_price" | "subtotal", ExtArgs["result"]["order_items"]>
  export type order_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $order_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_items"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      product_id: number
      quantity: number
      unit_price: Prisma.Decimal
      subtotal: Prisma.Decimal
    }, ExtArgs["result"]["order_items"]>
    composites: {}
  }

  type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = $Result.GetResult<Prisma.$order_itemsPayload, S>

  type order_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemsCountAggregateInputType | true
    }

  export interface order_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_items'], meta: { name: 'order_items' } }
    /**
     * Find zero or one Order_items that matches the filter.
     * @param {order_itemsFindUniqueArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemsFindUniqueArgs>(args: SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemsFindUniqueOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemsFindFirstArgs>(args?: SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_items.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_itemsFindManyArgs>(args?: SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_items.
     * @param {order_itemsCreateArgs} args - Arguments to create a Order_items.
     * @example
     * // Create one Order_items
     * const Order_items = await prisma.order_items.create({
     *   data: {
     *     // ... data to create a Order_items
     *   }
     * })
     * 
     */
    create<T extends order_itemsCreateArgs>(args: SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemsCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemsCreateManyArgs>(args?: SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_items.
     * @param {order_itemsDeleteArgs} args - Arguments to delete one Order_items.
     * @example
     * // Delete one Order_items
     * const Order_items = await prisma.order_items.delete({
     *   where: {
     *     // ... filter to delete one Order_items
     *   }
     * })
     * 
     */
    delete<T extends order_itemsDeleteArgs>(args: SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_items.
     * @param {order_itemsUpdateArgs} args - Arguments to update one Order_items.
     * @example
     * // Update one Order_items
     * const order_items = await prisma.order_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemsUpdateArgs>(args: SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemsDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemsUpdateManyArgs>(args: SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_items.
     * @param {order_itemsUpsertArgs} args - Arguments to update or create a Order_items.
     * @example
     * // Update or create a Order_items
     * const order_items = await prisma.order_items.upsert({
     *   create: {
     *     // ... data to create a Order_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items we want to update
     *   }
     * })
     */
    upsert<T extends order_itemsUpsertArgs>(args: SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_items.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemsCountArgs>(
      args?: Subset<T, order_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_itemsAggregateArgs>(args: Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>

    /**
     * Group by Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemsGroupByArgs['orderBy'] }
        : { orderBy?: order_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_items model
   */
  readonly fields: order_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order_items model
   */
  interface order_itemsFieldRefs {
    readonly id: FieldRef<"order_items", 'Int'>
    readonly order_id: FieldRef<"order_items", 'Int'>
    readonly product_id: FieldRef<"order_items", 'Int'>
    readonly quantity: FieldRef<"order_items", 'Int'>
    readonly unit_price: FieldRef<"order_items", 'Decimal'>
    readonly subtotal: FieldRef<"order_items", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * order_items findUnique
   */
  export type order_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findUniqueOrThrow
   */
  export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findFirst
   */
  export type order_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findFirstOrThrow
   */
  export type order_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findMany
   */
  export type order_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items create
   */
  export type order_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_items.
     */
    data: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
  }

  /**
   * order_items createMany
   */
  export type order_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_items update
   */
  export type order_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_items.
     */
    data: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
    /**
     * Choose, which order_items to update.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items updateMany
   */
  export type order_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_items upsert
   */
  export type order_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_items to update in case it exists.
     */
    where: order_itemsWhereUniqueInput
    /**
     * In case the order_items found by the `where` argument doesn't exist, create a new order_items with this data.
     */
    create: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
    /**
     * In case the order_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
  }

  /**
   * order_items delete
   */
  export type order_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter which order_items to delete.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items deleteMany
   */
  export type order_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_items without action
   */
  export type order_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_amount: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_amount: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    order_code: string | null
    total_amount: Decimal | null
    shipping_address: string | null
    note: string | null
    order_status: $Enums.orders_order_status | null
    payment_status: $Enums.orders_payment_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    order_code: string | null
    total_amount: Decimal | null
    shipping_address: string | null
    note: string | null
    order_status: $Enums.orders_order_status | null
    payment_status: $Enums.orders_payment_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_id: number
    order_code: number
    total_amount: number
    shipping_address: number
    note: number
    order_status: number
    payment_status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    user_id?: true
    total_amount?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    user_id?: true
    total_amount?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    user_id?: true
    order_code?: true
    total_amount?: true
    shipping_address?: true
    note?: true
    order_status?: true
    payment_status?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_id?: true
    order_code?: true
    total_amount?: true
    shipping_address?: true
    note?: true
    order_status?: true
    payment_status?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_id?: true
    order_code?: true
    total_amount?: true
    shipping_address?: true
    note?: true
    order_status?: true
    payment_status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    user_id: number
    order_code: string
    total_amount: Decimal
    shipping_address: string
    note: string | null
    order_status: $Enums.orders_order_status | null
    payment_status: $Enums.orders_payment_status | null
    created_at: Date | null
    updated_at: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    order_code?: boolean
    total_amount?: boolean
    shipping_address?: boolean
    note?: boolean
    order_status?: boolean
    payment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    payments?: boolean | orders$paymentsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type ordersSelectScalar = {
    id?: boolean
    user_id?: boolean
    order_code?: boolean
    total_amount?: boolean
    shipping_address?: boolean
    note?: boolean
    order_status?: boolean
    payment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "order_code" | "total_amount" | "shipping_address" | "note" | "order_status" | "payment_status" | "created_at" | "updated_at", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    payments?: boolean | orders$paymentsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      payments: Prisma.$paymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      order_code: string
      total_amount: Prisma.Decimal
      shipping_address: string
      note: string | null
      order_status: $Enums.orders_order_status | null
      payment_status: $Enums.orders_payment_status | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_items<T extends orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends orders$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, orders$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly user_id: FieldRef<"orders", 'Int'>
    readonly order_code: FieldRef<"orders", 'String'>
    readonly total_amount: FieldRef<"orders", 'Decimal'>
    readonly shipping_address: FieldRef<"orders", 'String'>
    readonly note: FieldRef<"orders", 'String'>
    readonly order_status: FieldRef<"orders", 'orders_order_status'>
    readonly payment_status: FieldRef<"orders", 'orders_payment_status'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
    readonly updated_at: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.order_items
   */
  export type orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * orders.payments
   */
  export type orders$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: Decimal | null
    method: $Enums.payments_method | null
    status: $Enums.payments_status | null
    transaction_code: string | null
    paid_at: Date | null
    created_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: Decimal | null
    method: $Enums.payments_method | null
    status: $Enums.payments_status | null
    transaction_code: string | null
    paid_at: Date | null
    created_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    order_id: number
    amount: number
    method: number
    status: number
    transaction_code: number
    paid_at: number
    created_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    method?: true
    status?: true
    transaction_code?: true
    paid_at?: true
    created_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    method?: true
    status?: true
    transaction_code?: true
    paid_at?: true
    created_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    method?: true
    status?: true
    transaction_code?: true
    paid_at?: true
    created_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    order_id: number
    amount: Decimal
    method: $Enums.payments_method
    status: $Enums.payments_status | null
    transaction_code: string | null
    paid_at: Date | null
    created_at: Date | null
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    transaction_code?: boolean
    paid_at?: boolean
    created_at?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>



  export type paymentsSelectScalar = {
    id?: boolean
    order_id?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    transaction_code?: boolean
    paid_at?: boolean
    created_at?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "amount" | "method" | "status" | "transaction_code" | "paid_at" | "created_at", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      amount: Prisma.Decimal
      method: $Enums.payments_method
      status: $Enums.payments_status | null
      transaction_code: string | null
      paid_at: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'Int'>
    readonly order_id: FieldRef<"payments", 'Int'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly method: FieldRef<"payments", 'payments_method'>
    readonly status: FieldRef<"payments", 'payments_status'>
    readonly transaction_code: FieldRef<"payments", 'String'>
    readonly paid_at: FieldRef<"payments", 'DateTime'>
    readonly created_at: FieldRef<"payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    price: Decimal | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    price: Decimal | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    category_id: number | null
    price: Decimal | null
    image: string | null
    description: string | null
    sku: string | null
    status: $Enums.products_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category_id: number | null
    price: Decimal | null
    image: string | null
    description: string | null
    sku: string | null
    status: $Enums.products_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    category_id: number
    price: number
    image: number
    description: number
    sku: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    category_id?: true
    price?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    category_id?: true
    price?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    category_id?: true
    price?: true
    image?: true
    description?: true
    sku?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    category_id?: true
    price?: true
    image?: true
    description?: true
    sku?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    category_id?: true
    price?: true
    image?: true
    description?: true
    sku?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string
    category_id: number | null
    price: Decimal
    image: string | null
    description: string | null
    sku: string | null
    status: $Enums.products_status | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category_id?: boolean
    price?: boolean
    image?: boolean
    description?: boolean
    sku?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart_items?: boolean | products$cart_itemsArgs<ExtArgs>
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    recipes?: boolean | products$recipesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>



  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    category_id?: boolean
    price?: boolean
    image?: boolean
    description?: boolean
    sku?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category_id" | "price" | "image" | "description" | "sku" | "status" | "created_at" | "updated_at", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | products$cart_itemsArgs<ExtArgs>
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    recipes?: boolean | products$recipesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      cart_items: Prisma.$cart_itemsPayload<ExtArgs>[]
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs> | null
      recipes: Prisma.$recipesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category_id: number | null
      price: Prisma.Decimal
      image: string | null
      description: string | null
      sku: string | null
      status: $Enums.products_status | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart_items<T extends products$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends products$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends products$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, products$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recipes<T extends products$recipesArgs<ExtArgs> = {}>(args?: Subset<T, products$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly name: FieldRef<"products", 'String'>
    readonly category_id: FieldRef<"products", 'Int'>
    readonly price: FieldRef<"products", 'Decimal'>
    readonly image: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly sku: FieldRef<"products", 'String'>
    readonly status: FieldRef<"products", 'products_status'>
    readonly created_at: FieldRef<"products", 'DateTime'>
    readonly updated_at: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.cart_items
   */
  export type products$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    cursor?: cart_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * products.order_items
   */
  export type products$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * products.categories
   */
  export type products$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * products.recipes
   */
  export type products$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    where?: recipesWhereInput
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    cursor?: recipesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model recipes
   */

  export type AggregateRecipes = {
    _count: RecipesCountAggregateOutputType | null
    _avg: RecipesAvgAggregateOutputType | null
    _sum: RecipesSumAggregateOutputType | null
    _min: RecipesMinAggregateOutputType | null
    _max: RecipesMaxAggregateOutputType | null
  }

  export type RecipesAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    inventory_id: number | null
    quantity_used: Decimal | null
  }

  export type RecipesSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    inventory_id: number | null
    quantity_used: Decimal | null
  }

  export type RecipesMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    inventory_id: number | null
    quantity_used: Decimal | null
    created_at: Date | null
  }

  export type RecipesMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    inventory_id: number | null
    quantity_used: Decimal | null
    created_at: Date | null
  }

  export type RecipesCountAggregateOutputType = {
    id: number
    product_id: number
    inventory_id: number
    quantity_used: number
    created_at: number
    _all: number
  }


  export type RecipesAvgAggregateInputType = {
    id?: true
    product_id?: true
    inventory_id?: true
    quantity_used?: true
  }

  export type RecipesSumAggregateInputType = {
    id?: true
    product_id?: true
    inventory_id?: true
    quantity_used?: true
  }

  export type RecipesMinAggregateInputType = {
    id?: true
    product_id?: true
    inventory_id?: true
    quantity_used?: true
    created_at?: true
  }

  export type RecipesMaxAggregateInputType = {
    id?: true
    product_id?: true
    inventory_id?: true
    quantity_used?: true
    created_at?: true
  }

  export type RecipesCountAggregateInputType = {
    id?: true
    product_id?: true
    inventory_id?: true
    quantity_used?: true
    created_at?: true
    _all?: true
  }

  export type RecipesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipes to aggregate.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recipes
    **/
    _count?: true | RecipesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipesMaxAggregateInputType
  }

  export type GetRecipesAggregateType<T extends RecipesAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipes[P]>
      : GetScalarType<T[P], AggregateRecipes[P]>
  }




  export type recipesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipesWhereInput
    orderBy?: recipesOrderByWithAggregationInput | recipesOrderByWithAggregationInput[]
    by: RecipesScalarFieldEnum[] | RecipesScalarFieldEnum
    having?: recipesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipesCountAggregateInputType | true
    _avg?: RecipesAvgAggregateInputType
    _sum?: RecipesSumAggregateInputType
    _min?: RecipesMinAggregateInputType
    _max?: RecipesMaxAggregateInputType
  }

  export type RecipesGroupByOutputType = {
    id: number
    product_id: number
    inventory_id: number
    quantity_used: Decimal
    created_at: Date | null
    _count: RecipesCountAggregateOutputType | null
    _avg: RecipesAvgAggregateOutputType | null
    _sum: RecipesSumAggregateOutputType | null
    _min: RecipesMinAggregateOutputType | null
    _max: RecipesMaxAggregateOutputType | null
  }

  type GetRecipesGroupByPayload<T extends recipesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipesGroupByOutputType[P]>
            : GetScalarType<T[P], RecipesGroupByOutputType[P]>
        }
      >
    >


  export type recipesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    inventory_id?: boolean
    quantity_used?: boolean
    created_at?: boolean
    inventory?: boolean | inventoryDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipes"]>



  export type recipesSelectScalar = {
    id?: boolean
    product_id?: boolean
    inventory_id?: boolean
    quantity_used?: boolean
    created_at?: boolean
  }

  export type recipesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "inventory_id" | "quantity_used" | "created_at", ExtArgs["result"]["recipes"]>
  export type recipesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | inventoryDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $recipesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recipes"
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number
      inventory_id: number
      quantity_used: Prisma.Decimal
      created_at: Date | null
    }, ExtArgs["result"]["recipes"]>
    composites: {}
  }

  type recipesGetPayload<S extends boolean | null | undefined | recipesDefaultArgs> = $Result.GetResult<Prisma.$recipesPayload, S>

  type recipesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recipesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipesCountAggregateInputType | true
    }

  export interface recipesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recipes'], meta: { name: 'recipes' } }
    /**
     * Find zero or one Recipes that matches the filter.
     * @param {recipesFindUniqueArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recipesFindUniqueArgs>(args: SelectSubset<T, recipesFindUniqueArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recipesFindUniqueOrThrowArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recipesFindUniqueOrThrowArgs>(args: SelectSubset<T, recipesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesFindFirstArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recipesFindFirstArgs>(args?: SelectSubset<T, recipesFindFirstArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesFindFirstOrThrowArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recipesFindFirstOrThrowArgs>(args?: SelectSubset<T, recipesFindFirstOrThrowArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipes.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipesWithIdOnly = await prisma.recipes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recipesFindManyArgs>(args?: SelectSubset<T, recipesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipes.
     * @param {recipesCreateArgs} args - Arguments to create a Recipes.
     * @example
     * // Create one Recipes
     * const Recipes = await prisma.recipes.create({
     *   data: {
     *     // ... data to create a Recipes
     *   }
     * })
     * 
     */
    create<T extends recipesCreateArgs>(args: SelectSubset<T, recipesCreateArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {recipesCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipes = await prisma.recipes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recipesCreateManyArgs>(args?: SelectSubset<T, recipesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recipes.
     * @param {recipesDeleteArgs} args - Arguments to delete one Recipes.
     * @example
     * // Delete one Recipes
     * const Recipes = await prisma.recipes.delete({
     *   where: {
     *     // ... filter to delete one Recipes
     *   }
     * })
     * 
     */
    delete<T extends recipesDeleteArgs>(args: SelectSubset<T, recipesDeleteArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipes.
     * @param {recipesUpdateArgs} args - Arguments to update one Recipes.
     * @example
     * // Update one Recipes
     * const recipes = await prisma.recipes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recipesUpdateArgs>(args: SelectSubset<T, recipesUpdateArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {recipesDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recipesDeleteManyArgs>(args?: SelectSubset<T, recipesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipes = await prisma.recipes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recipesUpdateManyArgs>(args: SelectSubset<T, recipesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipes.
     * @param {recipesUpsertArgs} args - Arguments to update or create a Recipes.
     * @example
     * // Update or create a Recipes
     * const recipes = await prisma.recipes.upsert({
     *   create: {
     *     // ... data to create a Recipes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipes we want to update
     *   }
     * })
     */
    upsert<T extends recipesUpsertArgs>(args: SelectSubset<T, recipesUpsertArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipes.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends recipesCountArgs>(
      args?: Subset<T, recipesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipesAggregateArgs>(args: Subset<T, RecipesAggregateArgs>): Prisma.PrismaPromise<GetRecipesAggregateType<T>>

    /**
     * Group by Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recipesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recipesGroupByArgs['orderBy'] }
        : { orderBy?: recipesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recipesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recipes model
   */
  readonly fields: recipesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recipes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recipesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends inventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, inventoryDefaultArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recipes model
   */
  interface recipesFieldRefs {
    readonly id: FieldRef<"recipes", 'Int'>
    readonly product_id: FieldRef<"recipes", 'Int'>
    readonly inventory_id: FieldRef<"recipes", 'Int'>
    readonly quantity_used: FieldRef<"recipes", 'Decimal'>
    readonly created_at: FieldRef<"recipes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * recipes findUnique
   */
  export type recipesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where: recipesWhereUniqueInput
  }

  /**
   * recipes findUniqueOrThrow
   */
  export type recipesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where: recipesWhereUniqueInput
  }

  /**
   * recipes findFirst
   */
  export type recipesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipes.
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * recipes findFirstOrThrow
   */
  export type recipesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipes.
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * recipes findMany
   */
  export type recipesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recipes.
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * recipes create
   */
  export type recipesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * The data needed to create a recipes.
     */
    data: XOR<recipesCreateInput, recipesUncheckedCreateInput>
  }

  /**
   * recipes createMany
   */
  export type recipesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recipes.
     */
    data: recipesCreateManyInput | recipesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recipes update
   */
  export type recipesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * The data needed to update a recipes.
     */
    data: XOR<recipesUpdateInput, recipesUncheckedUpdateInput>
    /**
     * Choose, which recipes to update.
     */
    where: recipesWhereUniqueInput
  }

  /**
   * recipes updateMany
   */
  export type recipesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recipes.
     */
    data: XOR<recipesUpdateManyMutationInput, recipesUncheckedUpdateManyInput>
    /**
     * Filter which recipes to update
     */
    where?: recipesWhereInput
    /**
     * Limit how many recipes to update.
     */
    limit?: number
  }

  /**
   * recipes upsert
   */
  export type recipesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * The filter to search for the recipes to update in case it exists.
     */
    where: recipesWhereUniqueInput
    /**
     * In case the recipes found by the `where` argument doesn't exist, create a new recipes with this data.
     */
    create: XOR<recipesCreateInput, recipesUncheckedCreateInput>
    /**
     * In case the recipes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recipesUpdateInput, recipesUncheckedUpdateInput>
  }

  /**
   * recipes delete
   */
  export type recipesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter which recipes to delete.
     */
    where: recipesWhereUniqueInput
  }

  /**
   * recipes deleteMany
   */
  export type recipesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipes to delete
     */
    where?: recipesWhereInput
    /**
     * Limit how many recipes to delete.
     */
    limit?: number
  }

  /**
   * recipes without action
   */
  export type recipesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
    address: string | null
    role: $Enums.users_role | null
    created_at: Date | null
    updated_at: Date | null
    facebook_id: string | null
    google_id: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
    address: string | null
    role: $Enums.users_role | null
    created_at: Date | null
    updated_at: Date | null
    facebook_id: string | null
    google_id: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password_hash: number
    address: number
    role: number
    created_at: number
    updated_at: number
    facebook_id: number
    google_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password_hash?: true
    address?: true
    role?: true
    created_at?: true
    updated_at?: true
    facebook_id?: true
    google_id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password_hash?: true
    address?: true
    role?: true
    created_at?: true
    updated_at?: true
    facebook_id?: true
    google_id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password_hash?: true
    address?: true
    role?: true
    created_at?: true
    updated_at?: true
    facebook_id?: true
    google_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    password_hash: string | null
    address: string | null
    role: $Enums.users_role | null
    created_at: Date | null
    updated_at: Date | null
    facebook_id: string | null
    google_id: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    address?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    facebook_id?: boolean
    google_id?: boolean
    carts?: boolean | users$cartsArgs<ExtArgs>
    inventory_transactions?: boolean | users$inventory_transactionsArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    address?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    facebook_id?: boolean
    google_id?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password_hash" | "address" | "role" | "created_at" | "updated_at" | "facebook_id" | "google_id", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | users$cartsArgs<ExtArgs>
    inventory_transactions?: boolean | users$inventory_transactionsArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      carts: Prisma.$cartsPayload<ExtArgs> | null
      inventory_transactions: Prisma.$inventory_transactionsPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string | null
      password_hash: string | null
      address: string | null
      role: $Enums.users_role | null
      created_at: Date | null
      updated_at: Date | null
      facebook_id: string | null
      google_id: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carts<T extends users$cartsArgs<ExtArgs> = {}>(args?: Subset<T, users$cartsArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inventory_transactions<T extends users$inventory_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, users$inventory_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly address: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'users_role'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly facebook_id: FieldRef<"users", 'String'>
    readonly google_id: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.carts
   */
  export type users$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    where?: cartsWhereInput
  }

  /**
   * users.inventory_transactions
   */
  export type users$inventory_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    where?: inventory_transactionsWhereInput
    orderBy?: inventory_transactionsOrderByWithRelationInput | inventory_transactionsOrderByWithRelationInput[]
    cursor?: inventory_transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Inventory_transactionsScalarFieldEnum | Inventory_transactionsScalarFieldEnum[]
  }

  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Cart_itemsScalarFieldEnum: {
    id: 'id',
    cart_id: 'cart_id',
    product_id: 'product_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    subtotal: 'subtotal'
  };

  export type Cart_itemsScalarFieldEnum = (typeof Cart_itemsScalarFieldEnum)[keyof typeof Cart_itemsScalarFieldEnum]


  export const CartsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unit: 'unit',
    quantity: 'quantity',
    min_quantity: 'min_quantity',
    cost_price: 'cost_price',
    supplier_name: 'supplier_name',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const Inventory_transactionsScalarFieldEnum: {
    id: 'id',
    inventory_id: 'inventory_id',
    type: 'type',
    quantity: 'quantity',
    note: 'note',
    created_by: 'created_by',
    created_at: 'created_at'
  };

  export type Inventory_transactionsScalarFieldEnum = (typeof Inventory_transactionsScalarFieldEnum)[keyof typeof Inventory_transactionsScalarFieldEnum]


  export const Order_itemsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    subtotal: 'subtotal'
  };

  export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    order_code: 'order_code',
    total_amount: 'total_amount',
    shipping_address: 'shipping_address',
    note: 'note',
    order_status: 'order_status',
    payment_status: 'payment_status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    amount: 'amount',
    method: 'method',
    status: 'status',
    transaction_code: 'transaction_code',
    paid_at: 'paid_at',
    created_at: 'created_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category_id: 'category_id',
    price: 'price',
    image: 'image',
    description: 'description',
    sku: 'sku',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const RecipesScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    inventory_id: 'inventory_id',
    quantity_used: 'quantity_used',
    created_at: 'created_at'
  };

  export type RecipesScalarFieldEnum = (typeof RecipesScalarFieldEnum)[keyof typeof RecipesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password_hash: 'password_hash',
    address: 'address',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at',
    facebook_id: 'facebook_id',
    google_id: 'google_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const categoriesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type categoriesOrderByRelevanceFieldEnum = (typeof categoriesOrderByRelevanceFieldEnum)[keyof typeof categoriesOrderByRelevanceFieldEnum]


  export const inventoryOrderByRelevanceFieldEnum: {
    name: 'name',
    unit: 'unit',
    supplier_name: 'supplier_name'
  };

  export type inventoryOrderByRelevanceFieldEnum = (typeof inventoryOrderByRelevanceFieldEnum)[keyof typeof inventoryOrderByRelevanceFieldEnum]


  export const inventory_transactionsOrderByRelevanceFieldEnum: {
    note: 'note'
  };

  export type inventory_transactionsOrderByRelevanceFieldEnum = (typeof inventory_transactionsOrderByRelevanceFieldEnum)[keyof typeof inventory_transactionsOrderByRelevanceFieldEnum]


  export const ordersOrderByRelevanceFieldEnum: {
    order_code: 'order_code',
    shipping_address: 'shipping_address',
    note: 'note'
  };

  export type ordersOrderByRelevanceFieldEnum = (typeof ordersOrderByRelevanceFieldEnum)[keyof typeof ordersOrderByRelevanceFieldEnum]


  export const paymentsOrderByRelevanceFieldEnum: {
    transaction_code: 'transaction_code'
  };

  export type paymentsOrderByRelevanceFieldEnum = (typeof paymentsOrderByRelevanceFieldEnum)[keyof typeof paymentsOrderByRelevanceFieldEnum]


  export const productsOrderByRelevanceFieldEnum: {
    name: 'name',
    image: 'image',
    description: 'description',
    sku: 'sku'
  };

  export type productsOrderByRelevanceFieldEnum = (typeof productsOrderByRelevanceFieldEnum)[keyof typeof productsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    password_hash: 'password_hash',
    address: 'address',
    facebook_id: 'facebook_id',
    google_id: 'google_id'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'categories_status'
   */
  export type Enumcategories_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'categories_status'>
    


  /**
   * Reference to a field of type 'inventory_status'
   */
  export type Enuminventory_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'inventory_status'>
    


  /**
   * Reference to a field of type 'inventory_transactions_type'
   */
  export type Enuminventory_transactions_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'inventory_transactions_type'>
    


  /**
   * Reference to a field of type 'orders_order_status'
   */
  export type Enumorders_order_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orders_order_status'>
    


  /**
   * Reference to a field of type 'orders_payment_status'
   */
  export type Enumorders_payment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orders_payment_status'>
    


  /**
   * Reference to a field of type 'payments_method'
   */
  export type Enumpayments_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payments_method'>
    


  /**
   * Reference to a field of type 'payments_status'
   */
  export type Enumpayments_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payments_status'>
    


  /**
   * Reference to a field of type 'products_status'
   */
  export type Enumproducts_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'products_status'>
    


  /**
   * Reference to a field of type 'users_role'
   */
  export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type cart_itemsWhereInput = {
    AND?: cart_itemsWhereInput | cart_itemsWhereInput[]
    OR?: cart_itemsWhereInput[]
    NOT?: cart_itemsWhereInput | cart_itemsWhereInput[]
    id?: IntFilter<"cart_items"> | number
    cart_id?: IntFilter<"cart_items"> | number
    product_id?: IntFilter<"cart_items"> | number
    quantity?: IntFilter<"cart_items"> | number
    unit_price?: DecimalFilter<"cart_items"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"cart_items"> | Decimal | DecimalJsLike | number | string
    carts?: XOR<CartsScalarRelationFilter, cartsWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type cart_itemsOrderByWithRelationInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
    carts?: cartsOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type cart_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cart_itemsWhereInput | cart_itemsWhereInput[]
    OR?: cart_itemsWhereInput[]
    NOT?: cart_itemsWhereInput | cart_itemsWhereInput[]
    cart_id?: IntFilter<"cart_items"> | number
    product_id?: IntFilter<"cart_items"> | number
    quantity?: IntFilter<"cart_items"> | number
    unit_price?: DecimalFilter<"cart_items"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"cart_items"> | Decimal | DecimalJsLike | number | string
    carts?: XOR<CartsScalarRelationFilter, cartsWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type cart_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
    _count?: cart_itemsCountOrderByAggregateInput
    _avg?: cart_itemsAvgOrderByAggregateInput
    _max?: cart_itemsMaxOrderByAggregateInput
    _min?: cart_itemsMinOrderByAggregateInput
    _sum?: cart_itemsSumOrderByAggregateInput
  }

  export type cart_itemsScalarWhereWithAggregatesInput = {
    AND?: cart_itemsScalarWhereWithAggregatesInput | cart_itemsScalarWhereWithAggregatesInput[]
    OR?: cart_itemsScalarWhereWithAggregatesInput[]
    NOT?: cart_itemsScalarWhereWithAggregatesInput | cart_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cart_items"> | number
    cart_id?: IntWithAggregatesFilter<"cart_items"> | number
    product_id?: IntWithAggregatesFilter<"cart_items"> | number
    quantity?: IntWithAggregatesFilter<"cart_items"> | number
    unit_price?: DecimalWithAggregatesFilter<"cart_items"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"cart_items"> | Decimal | DecimalJsLike | number | string
  }

  export type cartsWhereInput = {
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    id?: IntFilter<"carts"> | number
    user_id?: IntFilter<"carts"> | number
    created_at?: DateTimeNullableFilter<"carts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"carts"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type cartsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    cart_items?: cart_itemsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type cartsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    created_at?: DateTimeNullableFilter<"carts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"carts"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id">

  export type cartsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: cartsCountOrderByAggregateInput
    _avg?: cartsAvgOrderByAggregateInput
    _max?: cartsMaxOrderByAggregateInput
    _min?: cartsMinOrderByAggregateInput
    _sum?: cartsSumOrderByAggregateInput
  }

  export type cartsScalarWhereWithAggregatesInput = {
    AND?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    OR?: cartsScalarWhereWithAggregatesInput[]
    NOT?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carts"> | number
    user_id?: IntWithAggregatesFilter<"carts"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"carts"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"carts"> | Date | string | null
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    status?: Enumcategories_statusNullableFilter<"categories"> | $Enums.categories_status | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    products?: productsOrderByRelationAggregateInput
    _relevance?: categoriesOrderByRelevanceInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    status?: Enumcategories_statusNullableFilter<"categories"> | $Enums.categories_status | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    products?: ProductsListRelationFilter
  }, "id" | "name">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
    status?: Enumcategories_statusNullableWithAggregatesFilter<"categories"> | $Enums.categories_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
  }

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    id?: IntFilter<"inventory"> | number
    name?: StringFilter<"inventory"> | string
    unit?: StringFilter<"inventory"> | string
    quantity?: DecimalNullableFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    min_quantity?: DecimalNullableFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    cost_price?: DecimalNullableFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    supplier_name?: StringNullableFilter<"inventory"> | string | null
    status?: Enuminventory_statusNullableFilter<"inventory"> | $Enums.inventory_status | null
    created_at?: DateTimeNullableFilter<"inventory"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"inventory"> | Date | string | null
    inventory_transactions?: Inventory_transactionsListRelationFilter
    recipes?: RecipesListRelationFilter
  }

  export type inventoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrderInput | SortOrder
    min_quantity?: SortOrderInput | SortOrder
    cost_price?: SortOrderInput | SortOrder
    supplier_name?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    inventory_transactions?: inventory_transactionsOrderByRelationAggregateInput
    recipes?: recipesOrderByRelationAggregateInput
    _relevance?: inventoryOrderByRelevanceInput
  }

  export type inventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    name?: StringFilter<"inventory"> | string
    unit?: StringFilter<"inventory"> | string
    quantity?: DecimalNullableFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    min_quantity?: DecimalNullableFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    cost_price?: DecimalNullableFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    supplier_name?: StringNullableFilter<"inventory"> | string | null
    status?: Enuminventory_statusNullableFilter<"inventory"> | $Enums.inventory_status | null
    created_at?: DateTimeNullableFilter<"inventory"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"inventory"> | Date | string | null
    inventory_transactions?: Inventory_transactionsListRelationFilter
    recipes?: RecipesListRelationFilter
  }, "id">

  export type inventoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrderInput | SortOrder
    min_quantity?: SortOrderInput | SortOrder
    cost_price?: SortOrderInput | SortOrder
    supplier_name?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: inventoryCountOrderByAggregateInput
    _avg?: inventoryAvgOrderByAggregateInput
    _max?: inventoryMaxOrderByAggregateInput
    _min?: inventoryMinOrderByAggregateInput
    _sum?: inventorySumOrderByAggregateInput
  }

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    OR?: inventoryScalarWhereWithAggregatesInput[]
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inventory"> | number
    name?: StringWithAggregatesFilter<"inventory"> | string
    unit?: StringWithAggregatesFilter<"inventory"> | string
    quantity?: DecimalNullableWithAggregatesFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    min_quantity?: DecimalNullableWithAggregatesFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    cost_price?: DecimalNullableWithAggregatesFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    supplier_name?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    status?: Enuminventory_statusNullableWithAggregatesFilter<"inventory"> | $Enums.inventory_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"inventory"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"inventory"> | Date | string | null
  }

  export type inventory_transactionsWhereInput = {
    AND?: inventory_transactionsWhereInput | inventory_transactionsWhereInput[]
    OR?: inventory_transactionsWhereInput[]
    NOT?: inventory_transactionsWhereInput | inventory_transactionsWhereInput[]
    id?: IntFilter<"inventory_transactions"> | number
    inventory_id?: IntFilter<"inventory_transactions"> | number
    type?: Enuminventory_transactions_typeFilter<"inventory_transactions"> | $Enums.inventory_transactions_type
    quantity?: DecimalFilter<"inventory_transactions"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"inventory_transactions"> | string | null
    created_by?: IntNullableFilter<"inventory_transactions"> | number | null
    created_at?: DateTimeNullableFilter<"inventory_transactions"> | Date | string | null
    inventory?: XOR<InventoryScalarRelationFilter, inventoryWhereInput>
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type inventory_transactionsOrderByWithRelationInput = {
    id?: SortOrder
    inventory_id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    note?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    inventory?: inventoryOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    _relevance?: inventory_transactionsOrderByRelevanceInput
  }

  export type inventory_transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: inventory_transactionsWhereInput | inventory_transactionsWhereInput[]
    OR?: inventory_transactionsWhereInput[]
    NOT?: inventory_transactionsWhereInput | inventory_transactionsWhereInput[]
    inventory_id?: IntFilter<"inventory_transactions"> | number
    type?: Enuminventory_transactions_typeFilter<"inventory_transactions"> | $Enums.inventory_transactions_type
    quantity?: DecimalFilter<"inventory_transactions"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"inventory_transactions"> | string | null
    created_by?: IntNullableFilter<"inventory_transactions"> | number | null
    created_at?: DateTimeNullableFilter<"inventory_transactions"> | Date | string | null
    inventory?: XOR<InventoryScalarRelationFilter, inventoryWhereInput>
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type inventory_transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    inventory_id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    note?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: inventory_transactionsCountOrderByAggregateInput
    _avg?: inventory_transactionsAvgOrderByAggregateInput
    _max?: inventory_transactionsMaxOrderByAggregateInput
    _min?: inventory_transactionsMinOrderByAggregateInput
    _sum?: inventory_transactionsSumOrderByAggregateInput
  }

  export type inventory_transactionsScalarWhereWithAggregatesInput = {
    AND?: inventory_transactionsScalarWhereWithAggregatesInput | inventory_transactionsScalarWhereWithAggregatesInput[]
    OR?: inventory_transactionsScalarWhereWithAggregatesInput[]
    NOT?: inventory_transactionsScalarWhereWithAggregatesInput | inventory_transactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inventory_transactions"> | number
    inventory_id?: IntWithAggregatesFilter<"inventory_transactions"> | number
    type?: Enuminventory_transactions_typeWithAggregatesFilter<"inventory_transactions"> | $Enums.inventory_transactions_type
    quantity?: DecimalWithAggregatesFilter<"inventory_transactions"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableWithAggregatesFilter<"inventory_transactions"> | string | null
    created_by?: IntNullableWithAggregatesFilter<"inventory_transactions"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"inventory_transactions"> | Date | string | null
  }

  export type order_itemsWhereInput = {
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: IntFilter<"order_items"> | number
    product_id?: IntFilter<"order_items"> | number
    quantity?: IntFilter<"order_items"> | number
    unit_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type order_itemsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
    orders?: ordersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    order_id?: IntFilter<"order_items"> | number
    product_id?: IntFilter<"order_items"> | number
    quantity?: IntFilter<"order_items"> | number
    unit_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type order_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
    _count?: order_itemsCountOrderByAggregateInput
    _avg?: order_itemsAvgOrderByAggregateInput
    _max?: order_itemsMaxOrderByAggregateInput
    _min?: order_itemsMinOrderByAggregateInput
    _sum?: order_itemsSumOrderByAggregateInput
  }

  export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    OR?: order_itemsScalarWhereWithAggregatesInput[]
    NOT?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_items"> | number
    order_id?: IntWithAggregatesFilter<"order_items"> | number
    product_id?: IntWithAggregatesFilter<"order_items"> | number
    quantity?: IntWithAggregatesFilter<"order_items"> | number
    unit_price?: DecimalWithAggregatesFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"order_items"> | Decimal | DecimalJsLike | number | string
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    user_id?: IntFilter<"orders"> | number
    order_code?: StringFilter<"orders"> | string
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFilter<"orders"> | string
    note?: StringNullableFilter<"orders"> | string | null
    order_status?: Enumorders_order_statusNullableFilter<"orders"> | $Enums.orders_order_status | null
    payment_status?: Enumorders_payment_statusNullableFilter<"orders"> | $Enums.orders_payment_status | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    order_items?: Order_itemsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    payments?: PaymentsListRelationFilter
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_code?: SortOrder
    total_amount?: SortOrder
    shipping_address?: SortOrder
    note?: SortOrderInput | SortOrder
    order_status?: SortOrderInput | SortOrder
    payment_status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    order_items?: order_itemsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    payments?: paymentsOrderByRelationAggregateInput
    _relevance?: ordersOrderByRelevanceInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    order_code?: string
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    user_id?: IntFilter<"orders"> | number
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFilter<"orders"> | string
    note?: StringNullableFilter<"orders"> | string | null
    order_status?: Enumorders_order_statusNullableFilter<"orders"> | $Enums.orders_order_status | null
    payment_status?: Enumorders_payment_statusNullableFilter<"orders"> | $Enums.orders_payment_status | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    order_items?: Order_itemsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    payments?: PaymentsListRelationFilter
  }, "id" | "order_code">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_code?: SortOrder
    total_amount?: SortOrder
    shipping_address?: SortOrder
    note?: SortOrderInput | SortOrder
    order_status?: SortOrderInput | SortOrder
    payment_status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    user_id?: IntWithAggregatesFilter<"orders"> | number
    order_code?: StringWithAggregatesFilter<"orders"> | string
    total_amount?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address?: StringWithAggregatesFilter<"orders"> | string
    note?: StringNullableWithAggregatesFilter<"orders"> | string | null
    order_status?: Enumorders_order_statusNullableWithAggregatesFilter<"orders"> | $Enums.orders_order_status | null
    payment_status?: Enumorders_payment_statusNullableWithAggregatesFilter<"orders"> | $Enums.orders_payment_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: IntFilter<"payments"> | number
    order_id?: IntFilter<"payments"> | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    method?: Enumpayments_methodFilter<"payments"> | $Enums.payments_method
    status?: Enumpayments_statusNullableFilter<"payments"> | $Enums.payments_status | null
    transaction_code?: StringNullableFilter<"payments"> | string | null
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    created_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrderInput | SortOrder
    transaction_code?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    orders?: ordersOrderByWithRelationInput
    _relevance?: paymentsOrderByRelevanceInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    order_id?: IntFilter<"payments"> | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    method?: Enumpayments_methodFilter<"payments"> | $Enums.payments_method
    status?: Enumpayments_statusNullableFilter<"payments"> | $Enums.payments_status | null
    transaction_code?: StringNullableFilter<"payments"> | string | null
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    created_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }, "id">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrderInput | SortOrder
    transaction_code?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payments"> | number
    order_id?: IntWithAggregatesFilter<"payments"> | number
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    method?: Enumpayments_methodWithAggregatesFilter<"payments"> | $Enums.payments_method
    status?: Enumpayments_statusNullableWithAggregatesFilter<"payments"> | $Enums.payments_status | null
    transaction_code?: StringNullableWithAggregatesFilter<"payments"> | string | null
    paid_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    name?: StringFilter<"products"> | string
    category_id?: IntNullableFilter<"products"> | number | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    image?: StringNullableFilter<"products"> | string | null
    description?: StringNullableFilter<"products"> | string | null
    sku?: StringNullableFilter<"products"> | string | null
    status?: Enumproducts_statusNullableFilter<"products"> | $Enums.products_status | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    order_items?: Order_itemsListRelationFilter
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    recipes?: RecipesListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrderInput | SortOrder
    price?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    cart_items?: cart_itemsOrderByRelationAggregateInput
    order_items?: order_itemsOrderByRelationAggregateInput
    categories?: categoriesOrderByWithRelationInput
    recipes?: recipesOrderByRelationAggregateInput
    _relevance?: productsOrderByRelevanceInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    category_id?: IntNullableFilter<"products"> | number | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    image?: StringNullableFilter<"products"> | string | null
    description?: StringNullableFilter<"products"> | string | null
    status?: Enumproducts_statusNullableFilter<"products"> | $Enums.products_status | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    order_items?: Order_itemsListRelationFilter
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    recipes?: RecipesListRelationFilter
  }, "id" | "sku">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrderInput | SortOrder
    price?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    name?: StringWithAggregatesFilter<"products"> | string
    category_id?: IntNullableWithAggregatesFilter<"products"> | number | null
    price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string
    image?: StringNullableWithAggregatesFilter<"products"> | string | null
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    sku?: StringNullableWithAggregatesFilter<"products"> | string | null
    status?: Enumproducts_statusNullableWithAggregatesFilter<"products"> | $Enums.products_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
  }

  export type recipesWhereInput = {
    AND?: recipesWhereInput | recipesWhereInput[]
    OR?: recipesWhereInput[]
    NOT?: recipesWhereInput | recipesWhereInput[]
    id?: IntFilter<"recipes"> | number
    product_id?: IntFilter<"recipes"> | number
    inventory_id?: IntFilter<"recipes"> | number
    quantity_used?: DecimalFilter<"recipes"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"recipes"> | Date | string | null
    inventory?: XOR<InventoryScalarRelationFilter, inventoryWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type recipesOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    inventory_id?: SortOrder
    quantity_used?: SortOrder
    created_at?: SortOrderInput | SortOrder
    inventory?: inventoryOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type recipesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: recipesWhereInput | recipesWhereInput[]
    OR?: recipesWhereInput[]
    NOT?: recipesWhereInput | recipesWhereInput[]
    product_id?: IntFilter<"recipes"> | number
    inventory_id?: IntFilter<"recipes"> | number
    quantity_used?: DecimalFilter<"recipes"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"recipes"> | Date | string | null
    inventory?: XOR<InventoryScalarRelationFilter, inventoryWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type recipesOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    inventory_id?: SortOrder
    quantity_used?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: recipesCountOrderByAggregateInput
    _avg?: recipesAvgOrderByAggregateInput
    _max?: recipesMaxOrderByAggregateInput
    _min?: recipesMinOrderByAggregateInput
    _sum?: recipesSumOrderByAggregateInput
  }

  export type recipesScalarWhereWithAggregatesInput = {
    AND?: recipesScalarWhereWithAggregatesInput | recipesScalarWhereWithAggregatesInput[]
    OR?: recipesScalarWhereWithAggregatesInput[]
    NOT?: recipesScalarWhereWithAggregatesInput | recipesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recipes"> | number
    product_id?: IntWithAggregatesFilter<"recipes"> | number
    inventory_id?: IntWithAggregatesFilter<"recipes"> | number
    quantity_used?: DecimalWithAggregatesFilter<"recipes"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"recipes"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    password_hash?: StringNullableFilter<"users"> | string | null
    address?: StringNullableFilter<"users"> | string | null
    role?: Enumusers_roleNullableFilter<"users"> | $Enums.users_role | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    facebook_id?: StringNullableFilter<"users"> | string | null
    google_id?: StringNullableFilter<"users"> | string | null
    carts?: XOR<CartsNullableScalarRelationFilter, cartsWhereInput> | null
    inventory_transactions?: Inventory_transactionsListRelationFilter
    orders?: OrdersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    facebook_id?: SortOrderInput | SortOrder
    google_id?: SortOrderInput | SortOrder
    carts?: cartsOrderByWithRelationInput
    inventory_transactions?: inventory_transactionsOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    facebook_id?: string
    google_id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    password_hash?: StringNullableFilter<"users"> | string | null
    address?: StringNullableFilter<"users"> | string | null
    role?: Enumusers_roleNullableFilter<"users"> | $Enums.users_role | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    carts?: XOR<CartsNullableScalarRelationFilter, cartsWhereInput> | null
    inventory_transactions?: Inventory_transactionsListRelationFilter
    orders?: OrdersListRelationFilter
  }, "id" | "email" | "facebook_id" | "google_id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    facebook_id?: SortOrderInput | SortOrder
    google_id?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    password_hash?: StringNullableWithAggregatesFilter<"users"> | string | null
    address?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: Enumusers_roleNullableWithAggregatesFilter<"users"> | $Enums.users_role | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    facebook_id?: StringNullableWithAggregatesFilter<"users"> | string | null
    google_id?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type cart_itemsCreateInput = {
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    carts: cartsCreateNestedOneWithoutCart_itemsInput
    products: productsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateInput = {
    id?: number
    cart_id: number
    product_id: number
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type cart_itemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carts?: cartsUpdateOneRequiredWithoutCart_itemsNestedInput
    products?: productsUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type cart_itemsCreateManyInput = {
    id?: number
    cart_id: number
    product_id: number
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type cart_itemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type cart_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type cartsCreateInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutCartsInput
    users: usersCreateNestedOneWithoutCartsInput
  }

  export type cartsUncheckedCreateInput = {
    id?: number
    user_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutCartsInput
  }

  export type cartsUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutCartsNestedInput
    users?: usersUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutCartsNestedInput
  }

  export type cartsCreateManyInput = {
    id?: number
    user_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type cartsUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesCreateInput = {
    name: string
    status?: $Enums.categories_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    status?: $Enums.categories_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumcategories_statusFieldUpdateOperationsInput | $Enums.categories_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumcategories_statusFieldUpdateOperationsInput | $Enums.categories_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
    status?: $Enums.categories_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumcategories_statusFieldUpdateOperationsInput | $Enums.categories_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumcategories_statusFieldUpdateOperationsInput | $Enums.categories_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventoryCreateInput = {
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_quantity?: Decimal | DecimalJsLike | number | string | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    supplier_name?: string | null
    status?: $Enums.inventory_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutInventoryInput
    recipes?: recipesCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateInput = {
    id?: number
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_quantity?: Decimal | DecimalJsLike | number | string | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    supplier_name?: string | null
    status?: $Enums.inventory_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutInventoryInput
    recipes?: recipesUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminventory_statusFieldUpdateOperationsInput | $Enums.inventory_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory_transactions?: inventory_transactionsUpdateManyWithoutInventoryNestedInput
    recipes?: recipesUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminventory_statusFieldUpdateOperationsInput | $Enums.inventory_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutInventoryNestedInput
    recipes?: recipesUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryCreateManyInput = {
    id?: number
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_quantity?: Decimal | DecimalJsLike | number | string | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    supplier_name?: string | null
    status?: $Enums.inventory_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type inventoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminventory_statusFieldUpdateOperationsInput | $Enums.inventory_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminventory_statusFieldUpdateOperationsInput | $Enums.inventory_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsCreateInput = {
    type: $Enums.inventory_transactions_type
    quantity: Decimal | DecimalJsLike | number | string
    note?: string | null
    created_at?: Date | string | null
    inventory: inventoryCreateNestedOneWithoutInventory_transactionsInput
    users?: usersCreateNestedOneWithoutInventory_transactionsInput
  }

  export type inventory_transactionsUncheckedCreateInput = {
    id?: number
    inventory_id: number
    type: $Enums.inventory_transactions_type
    quantity: Decimal | DecimalJsLike | number | string
    note?: string | null
    created_by?: number | null
    created_at?: Date | string | null
  }

  export type inventory_transactionsUpdateInput = {
    type?: Enuminventory_transactions_typeFieldUpdateOperationsInput | $Enums.inventory_transactions_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateOneRequiredWithoutInventory_transactionsNestedInput
    users?: usersUpdateOneWithoutInventory_transactionsNestedInput
  }

  export type inventory_transactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventory_id?: IntFieldUpdateOperationsInput | number
    type?: Enuminventory_transactions_typeFieldUpdateOperationsInput | $Enums.inventory_transactions_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsCreateManyInput = {
    id?: number
    inventory_id: number
    type: $Enums.inventory_transactions_type
    quantity: Decimal | DecimalJsLike | number | string
    note?: string | null
    created_by?: number | null
    created_at?: Date | string | null
  }

  export type inventory_transactionsUpdateManyMutationInput = {
    type?: Enuminventory_transactions_typeFieldUpdateOperationsInput | $Enums.inventory_transactions_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventory_id?: IntFieldUpdateOperationsInput | number
    type?: Enuminventory_transactions_typeFieldUpdateOperationsInput | $Enums.inventory_transactions_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsCreateInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
    products: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateInput = {
    id?: number
    order_id: number
    product_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
    products?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateManyInput = {
    id?: number
    order_id: number
    product_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ordersCreateInput = {
    order_code: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    note?: string | null
    order_status?: $Enums.orders_order_status | null
    payment_status?: $Enums.orders_payment_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    user_id: number
    order_code: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    note?: string | null
    order_status?: $Enums.orders_order_status | null
    payment_status?: $Enums.orders_payment_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    order_code?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    order_status?: NullableEnumorders_order_statusFieldUpdateOperationsInput | $Enums.orders_order_status | null
    payment_status?: NullableEnumorders_payment_statusFieldUpdateOperationsInput | $Enums.orders_payment_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_code?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    order_status?: NullableEnumorders_order_statusFieldUpdateOperationsInput | $Enums.orders_order_status | null
    payment_status?: NullableEnumorders_payment_statusFieldUpdateOperationsInput | $Enums.orders_payment_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id?: number
    user_id: number
    order_code: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    note?: string | null
    order_status?: $Enums.orders_order_status | null
    payment_status?: $Enums.orders_payment_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ordersUpdateManyMutationInput = {
    order_code?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    order_status?: NullableEnumorders_order_statusFieldUpdateOperationsInput | $Enums.orders_order_status | null
    payment_status?: NullableEnumorders_payment_statusFieldUpdateOperationsInput | $Enums.orders_payment_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_code?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    order_status?: NullableEnumorders_order_statusFieldUpdateOperationsInput | $Enums.orders_order_status | null
    payment_status?: NullableEnumorders_payment_statusFieldUpdateOperationsInput | $Enums.orders_payment_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.payments_method
    status?: $Enums.payments_status | null
    transaction_code?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string | null
    orders: ordersCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: number
    order_id: number
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.payments_method
    status?: $Enums.payments_status | null
    transaction_code?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type paymentsUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayments_methodFieldUpdateOperationsInput | $Enums.payments_method
    status?: NullableEnumpayments_statusFieldUpdateOperationsInput | $Enums.payments_status | null
    transaction_code?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayments_methodFieldUpdateOperationsInput | $Enums.payments_method
    status?: NullableEnumpayments_statusFieldUpdateOperationsInput | $Enums.payments_status | null
    transaction_code?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsCreateManyInput = {
    id?: number
    order_id: number
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.payments_method
    status?: $Enums.payments_status | null
    transaction_code?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type paymentsUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayments_methodFieldUpdateOperationsInput | $Enums.payments_method
    status?: NullableEnumpayments_statusFieldUpdateOperationsInput | $Enums.payments_status | null
    transaction_code?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayments_methodFieldUpdateOperationsInput | $Enums.payments_method
    status?: NullableEnumpayments_statusFieldUpdateOperationsInput | $Enums.payments_status | null
    transaction_code?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    image?: string | null
    description?: string | null
    sku?: string | null
    status?: $Enums.products_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
    recipes?: recipesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    name: string
    category_id?: number | null
    price: Decimal | DecimalJsLike | number | string
    image?: string | null
    description?: string | null
    sku?: string | null
    status?: $Enums.products_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    recipes?: recipesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
    recipes?: recipesUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    recipes?: recipesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id?: number
    name: string
    category_id?: number | null
    price: Decimal | DecimalJsLike | number | string
    image?: string | null
    description?: string | null
    sku?: string | null
    status?: $Enums.products_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type productsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipesCreateInput = {
    quantity_used: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    inventory: inventoryCreateNestedOneWithoutRecipesInput
    products: productsCreateNestedOneWithoutRecipesInput
  }

  export type recipesUncheckedCreateInput = {
    id?: number
    product_id: number
    inventory_id: number
    quantity_used: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type recipesUpdateInput = {
    quantity_used?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateOneRequiredWithoutRecipesNestedInput
    products?: productsUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type recipesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    inventory_id?: IntFieldUpdateOperationsInput | number
    quantity_used?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipesCreateManyInput = {
    id?: number
    product_id: number
    inventory_id: number
    quantity_used: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type recipesUpdateManyMutationInput = {
    quantity_used?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    inventory_id?: IntFieldUpdateOperationsInput | number
    quantity_used?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    name: string
    email: string
    phone?: string | null
    password_hash?: string | null
    address?: string | null
    role?: $Enums.users_role | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    facebook_id?: string | null
    google_id?: string | null
    carts?: cartsCreateNestedOneWithoutUsersInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password_hash?: string | null
    address?: string | null
    role?: $Enums.users_role | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    facebook_id?: string | null
    google_id?: string | null
    carts?: cartsUncheckedCreateNestedOneWithoutUsersInput
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    facebook_id?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUpdateOneWithoutUsersNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    facebook_id?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUncheckedUpdateOneWithoutUsersNestedInput
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password_hash?: string | null
    address?: string | null
    role?: $Enums.users_role | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    facebook_id?: string | null
    google_id?: string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    facebook_id?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    facebook_id?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CartsScalarRelationFilter = {
    is?: cartsWhereInput
    isNot?: cartsWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type cart_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
  }

  export type cart_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
  }

  export type cart_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
  }

  export type cart_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
  }

  export type cart_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Cart_itemsListRelationFilter = {
    every?: cart_itemsWhereInput
    some?: cart_itemsWhereInput
    none?: cart_itemsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cart_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cartsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cartsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type cartsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cartsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cartsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumcategories_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.categories_status | Enumcategories_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.categories_status[] | null
    notIn?: $Enums.categories_status[] | null
    not?: NestedEnumcategories_statusNullableFilter<$PrismaModel> | $Enums.categories_status | null
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesOrderByRelevanceInput = {
    fields: categoriesOrderByRelevanceFieldEnum | categoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumcategories_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.categories_status | Enumcategories_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.categories_status[] | null
    notIn?: $Enums.categories_status[] | null
    not?: NestedEnumcategories_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.categories_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcategories_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumcategories_statusNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enuminventory_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.inventory_status | Enuminventory_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.inventory_status[] | null
    notIn?: $Enums.inventory_status[] | null
    not?: NestedEnuminventory_statusNullableFilter<$PrismaModel> | $Enums.inventory_status | null
  }

  export type Inventory_transactionsListRelationFilter = {
    every?: inventory_transactionsWhereInput
    some?: inventory_transactionsWhereInput
    none?: inventory_transactionsWhereInput
  }

  export type RecipesListRelationFilter = {
    every?: recipesWhereInput
    some?: recipesWhereInput
    none?: recipesWhereInput
  }

  export type inventory_transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recipesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type inventoryOrderByRelevanceInput = {
    fields: inventoryOrderByRelevanceFieldEnum | inventoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type inventoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    min_quantity?: SortOrder
    cost_price?: SortOrder
    supplier_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type inventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    min_quantity?: SortOrder
    cost_price?: SortOrder
  }

  export type inventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    min_quantity?: SortOrder
    cost_price?: SortOrder
    supplier_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type inventoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    min_quantity?: SortOrder
    cost_price?: SortOrder
    supplier_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type inventorySumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    min_quantity?: SortOrder
    cost_price?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enuminventory_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.inventory_status | Enuminventory_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.inventory_status[] | null
    notIn?: $Enums.inventory_status[] | null
    not?: NestedEnuminventory_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.inventory_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnuminventory_statusNullableFilter<$PrismaModel>
    _max?: NestedEnuminventory_statusNullableFilter<$PrismaModel>
  }

  export type Enuminventory_transactions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.inventory_transactions_type | Enuminventory_transactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.inventory_transactions_type[]
    notIn?: $Enums.inventory_transactions_type[]
    not?: NestedEnuminventory_transactions_typeFilter<$PrismaModel> | $Enums.inventory_transactions_type
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InventoryScalarRelationFilter = {
    is?: inventoryWhereInput
    isNot?: inventoryWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type inventory_transactionsOrderByRelevanceInput = {
    fields: inventory_transactionsOrderByRelevanceFieldEnum | inventory_transactionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type inventory_transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    inventory_id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    note?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type inventory_transactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    inventory_id?: SortOrder
    quantity?: SortOrder
    created_by?: SortOrder
  }

  export type inventory_transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    inventory_id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    note?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type inventory_transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    inventory_id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    note?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type inventory_transactionsSumOrderByAggregateInput = {
    id?: SortOrder
    inventory_id?: SortOrder
    quantity?: SortOrder
    created_by?: SortOrder
  }

  export type Enuminventory_transactions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.inventory_transactions_type | Enuminventory_transactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.inventory_transactions_type[]
    notIn?: $Enums.inventory_transactions_type[]
    not?: NestedEnuminventory_transactions_typeWithAggregatesFilter<$PrismaModel> | $Enums.inventory_transactions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminventory_transactions_typeFilter<$PrismaModel>
    _max?: NestedEnuminventory_transactions_typeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type order_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
  }

  export type order_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
  }

  export type order_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
  }

  export type order_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
  }

  export type order_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    subtotal?: SortOrder
  }

  export type Enumorders_order_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_order_status | Enumorders_order_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_order_status[] | null
    notIn?: $Enums.orders_order_status[] | null
    not?: NestedEnumorders_order_statusNullableFilter<$PrismaModel> | $Enums.orders_order_status | null
  }

  export type Enumorders_payment_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_payment_status | Enumorders_payment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_payment_status[] | null
    notIn?: $Enums.orders_payment_status[] | null
    not?: NestedEnumorders_payment_statusNullableFilter<$PrismaModel> | $Enums.orders_payment_status | null
  }

  export type Order_itemsListRelationFilter = {
    every?: order_itemsWhereInput
    some?: order_itemsWhereInput
    none?: order_itemsWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: paymentsWhereInput
    some?: paymentsWhereInput
    none?: paymentsWhereInput
  }

  export type order_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersOrderByRelevanceInput = {
    fields: ordersOrderByRelevanceFieldEnum | ordersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_code?: SortOrder
    total_amount?: SortOrder
    shipping_address?: SortOrder
    note?: SortOrder
    order_status?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_amount?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_code?: SortOrder
    total_amount?: SortOrder
    shipping_address?: SortOrder
    note?: SortOrder
    order_status?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_code?: SortOrder
    total_amount?: SortOrder
    shipping_address?: SortOrder
    note?: SortOrder
    order_status?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_amount?: SortOrder
  }

  export type Enumorders_order_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_order_status | Enumorders_order_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_order_status[] | null
    notIn?: $Enums.orders_order_status[] | null
    not?: NestedEnumorders_order_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.orders_order_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorders_order_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumorders_order_statusNullableFilter<$PrismaModel>
  }

  export type Enumorders_payment_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_payment_status | Enumorders_payment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_payment_status[] | null
    notIn?: $Enums.orders_payment_status[] | null
    not?: NestedEnumorders_payment_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.orders_payment_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorders_payment_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumorders_payment_statusNullableFilter<$PrismaModel>
  }

  export type Enumpayments_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_method | Enumpayments_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payments_method[]
    notIn?: $Enums.payments_method[]
    not?: NestedEnumpayments_methodFilter<$PrismaModel> | $Enums.payments_method
  }

  export type Enumpayments_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_status | Enumpayments_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payments_status[] | null
    notIn?: $Enums.payments_status[] | null
    not?: NestedEnumpayments_statusNullableFilter<$PrismaModel> | $Enums.payments_status | null
  }

  export type paymentsOrderByRelevanceInput = {
    fields: paymentsOrderByRelevanceFieldEnum | paymentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transaction_code?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transaction_code?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transaction_code?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type Enumpayments_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_method | Enumpayments_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payments_method[]
    notIn?: $Enums.payments_method[]
    not?: NestedEnumpayments_methodWithAggregatesFilter<$PrismaModel> | $Enums.payments_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayments_methodFilter<$PrismaModel>
    _max?: NestedEnumpayments_methodFilter<$PrismaModel>
  }

  export type Enumpayments_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_status | Enumpayments_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payments_status[] | null
    notIn?: $Enums.payments_status[] | null
    not?: NestedEnumpayments_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.payments_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayments_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumpayments_statusNullableFilter<$PrismaModel>
  }

  export type Enumproducts_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.products_status | Enumproducts_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.products_status[] | null
    notIn?: $Enums.products_status[] | null
    not?: NestedEnumproducts_statusNullableFilter<$PrismaModel> | $Enums.products_status | null
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type productsOrderByRelevanceInput = {
    fields: productsOrderByRelevanceFieldEnum | productsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
    image?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
    image?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
    image?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
  }

  export type Enumproducts_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.products_status | Enumproducts_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.products_status[] | null
    notIn?: $Enums.products_status[] | null
    not?: NestedEnumproducts_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.products_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumproducts_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumproducts_statusNullableFilter<$PrismaModel>
  }

  export type recipesCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    inventory_id?: SortOrder
    quantity_used?: SortOrder
    created_at?: SortOrder
  }

  export type recipesAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    inventory_id?: SortOrder
    quantity_used?: SortOrder
  }

  export type recipesMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    inventory_id?: SortOrder
    quantity_used?: SortOrder
    created_at?: SortOrder
  }

  export type recipesMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    inventory_id?: SortOrder
    quantity_used?: SortOrder
    created_at?: SortOrder
  }

  export type recipesSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    inventory_id?: SortOrder
    quantity_used?: SortOrder
  }

  export type Enumusers_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableFilter<$PrismaModel> | $Enums.users_role | null
  }

  export type CartsNullableScalarRelationFilter = {
    is?: cartsWhereInput | null
    isNot?: cartsWhereInput | null
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    address?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    facebook_id?: SortOrder
    google_id?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    address?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    facebook_id?: SortOrder
    google_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    address?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    facebook_id?: SortOrder
    google_id?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumusers_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_roleNullableFilter<$PrismaModel>
  }

  export type cartsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: cartsCreateOrConnectWithoutCart_itemsInput
    connect?: cartsWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCart_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type cartsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: cartsCreateOrConnectWithoutCart_itemsInput
    upsert?: cartsUpsertWithoutCart_itemsInput
    connect?: cartsWhereUniqueInput
    update?: XOR<XOR<cartsUpdateToOneWithWhereWithoutCart_itemsInput, cartsUpdateWithoutCart_itemsInput>, cartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type productsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCart_itemsInput
    upsert?: productsUpsertWithoutCart_itemsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutCart_itemsInput, productsUpdateWithoutCart_itemsInput>, productsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type cart_itemsCreateNestedManyWithoutCartsInput = {
    create?: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput> | cart_itemsCreateWithoutCartsInput[] | cart_itemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartsInput | cart_itemsCreateOrConnectWithoutCartsInput[]
    createMany?: cart_itemsCreateManyCartsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutCartsInput = {
    create?: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCartsInput
    connect?: usersWhereUniqueInput
  }

  export type cart_itemsUncheckedCreateNestedManyWithoutCartsInput = {
    create?: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput> | cart_itemsCreateWithoutCartsInput[] | cart_itemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartsInput | cart_itemsCreateOrConnectWithoutCartsInput[]
    createMany?: cart_itemsCreateManyCartsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type cart_itemsUpdateManyWithoutCartsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput> | cart_itemsCreateWithoutCartsInput[] | cart_itemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartsInput | cart_itemsCreateOrConnectWithoutCartsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutCartsInput | cart_itemsUpsertWithWhereUniqueWithoutCartsInput[]
    createMany?: cart_itemsCreateManyCartsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutCartsInput | cart_itemsUpdateWithWhereUniqueWithoutCartsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutCartsInput | cart_itemsUpdateManyWithWhereWithoutCartsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCartsInput
    upsert?: usersUpsertWithoutCartsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCartsInput, usersUpdateWithoutCartsInput>, usersUncheckedUpdateWithoutCartsInput>
  }

  export type cart_itemsUncheckedUpdateManyWithoutCartsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput> | cart_itemsCreateWithoutCartsInput[] | cart_itemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartsInput | cart_itemsCreateOrConnectWithoutCartsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutCartsInput | cart_itemsUpsertWithWhereUniqueWithoutCartsInput[]
    createMany?: cart_itemsCreateManyCartsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutCartsInput | cart_itemsUpdateWithWhereUniqueWithoutCartsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutCartsInput | cart_itemsUpdateManyWithWhereWithoutCartsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumcategories_statusFieldUpdateOperationsInput = {
    set?: $Enums.categories_status | null
  }

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type inventory_transactionsCreateNestedManyWithoutInventoryInput = {
    create?: XOR<inventory_transactionsCreateWithoutInventoryInput, inventory_transactionsUncheckedCreateWithoutInventoryInput> | inventory_transactionsCreateWithoutInventoryInput[] | inventory_transactionsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutInventoryInput | inventory_transactionsCreateOrConnectWithoutInventoryInput[]
    createMany?: inventory_transactionsCreateManyInventoryInputEnvelope
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
  }

  export type recipesCreateNestedManyWithoutInventoryInput = {
    create?: XOR<recipesCreateWithoutInventoryInput, recipesUncheckedCreateWithoutInventoryInput> | recipesCreateWithoutInventoryInput[] | recipesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutInventoryInput | recipesCreateOrConnectWithoutInventoryInput[]
    createMany?: recipesCreateManyInventoryInputEnvelope
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
  }

  export type inventory_transactionsUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<inventory_transactionsCreateWithoutInventoryInput, inventory_transactionsUncheckedCreateWithoutInventoryInput> | inventory_transactionsCreateWithoutInventoryInput[] | inventory_transactionsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutInventoryInput | inventory_transactionsCreateOrConnectWithoutInventoryInput[]
    createMany?: inventory_transactionsCreateManyInventoryInputEnvelope
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
  }

  export type recipesUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<recipesCreateWithoutInventoryInput, recipesUncheckedCreateWithoutInventoryInput> | recipesCreateWithoutInventoryInput[] | recipesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutInventoryInput | recipesCreateOrConnectWithoutInventoryInput[]
    createMany?: recipesCreateManyInventoryInputEnvelope
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnuminventory_statusFieldUpdateOperationsInput = {
    set?: $Enums.inventory_status | null
  }

  export type inventory_transactionsUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<inventory_transactionsCreateWithoutInventoryInput, inventory_transactionsUncheckedCreateWithoutInventoryInput> | inventory_transactionsCreateWithoutInventoryInput[] | inventory_transactionsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutInventoryInput | inventory_transactionsCreateOrConnectWithoutInventoryInput[]
    upsert?: inventory_transactionsUpsertWithWhereUniqueWithoutInventoryInput | inventory_transactionsUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: inventory_transactionsCreateManyInventoryInputEnvelope
    set?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    disconnect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    delete?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    update?: inventory_transactionsUpdateWithWhereUniqueWithoutInventoryInput | inventory_transactionsUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: inventory_transactionsUpdateManyWithWhereWithoutInventoryInput | inventory_transactionsUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: inventory_transactionsScalarWhereInput | inventory_transactionsScalarWhereInput[]
  }

  export type recipesUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<recipesCreateWithoutInventoryInput, recipesUncheckedCreateWithoutInventoryInput> | recipesCreateWithoutInventoryInput[] | recipesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutInventoryInput | recipesCreateOrConnectWithoutInventoryInput[]
    upsert?: recipesUpsertWithWhereUniqueWithoutInventoryInput | recipesUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: recipesCreateManyInventoryInputEnvelope
    set?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    disconnect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    delete?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    update?: recipesUpdateWithWhereUniqueWithoutInventoryInput | recipesUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: recipesUpdateManyWithWhereWithoutInventoryInput | recipesUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: recipesScalarWhereInput | recipesScalarWhereInput[]
  }

  export type inventory_transactionsUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<inventory_transactionsCreateWithoutInventoryInput, inventory_transactionsUncheckedCreateWithoutInventoryInput> | inventory_transactionsCreateWithoutInventoryInput[] | inventory_transactionsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutInventoryInput | inventory_transactionsCreateOrConnectWithoutInventoryInput[]
    upsert?: inventory_transactionsUpsertWithWhereUniqueWithoutInventoryInput | inventory_transactionsUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: inventory_transactionsCreateManyInventoryInputEnvelope
    set?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    disconnect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    delete?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    update?: inventory_transactionsUpdateWithWhereUniqueWithoutInventoryInput | inventory_transactionsUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: inventory_transactionsUpdateManyWithWhereWithoutInventoryInput | inventory_transactionsUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: inventory_transactionsScalarWhereInput | inventory_transactionsScalarWhereInput[]
  }

  export type recipesUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<recipesCreateWithoutInventoryInput, recipesUncheckedCreateWithoutInventoryInput> | recipesCreateWithoutInventoryInput[] | recipesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutInventoryInput | recipesCreateOrConnectWithoutInventoryInput[]
    upsert?: recipesUpsertWithWhereUniqueWithoutInventoryInput | recipesUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: recipesCreateManyInventoryInputEnvelope
    set?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    disconnect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    delete?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    update?: recipesUpdateWithWhereUniqueWithoutInventoryInput | recipesUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: recipesUpdateManyWithWhereWithoutInventoryInput | recipesUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: recipesScalarWhereInput | recipesScalarWhereInput[]
  }

  export type inventoryCreateNestedOneWithoutInventory_transactionsInput = {
    create?: XOR<inventoryCreateWithoutInventory_transactionsInput, inventoryUncheckedCreateWithoutInventory_transactionsInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutInventory_transactionsInput
    connect?: inventoryWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutInventory_transactionsInput = {
    create?: XOR<usersCreateWithoutInventory_transactionsInput, usersUncheckedCreateWithoutInventory_transactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutInventory_transactionsInput
    connect?: usersWhereUniqueInput
  }

  export type Enuminventory_transactions_typeFieldUpdateOperationsInput = {
    set?: $Enums.inventory_transactions_type
  }

  export type inventoryUpdateOneRequiredWithoutInventory_transactionsNestedInput = {
    create?: XOR<inventoryCreateWithoutInventory_transactionsInput, inventoryUncheckedCreateWithoutInventory_transactionsInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutInventory_transactionsInput
    upsert?: inventoryUpsertWithoutInventory_transactionsInput
    connect?: inventoryWhereUniqueInput
    update?: XOR<XOR<inventoryUpdateToOneWithWhereWithoutInventory_transactionsInput, inventoryUpdateWithoutInventory_transactionsInput>, inventoryUncheckedUpdateWithoutInventory_transactionsInput>
  }

  export type usersUpdateOneWithoutInventory_transactionsNestedInput = {
    create?: XOR<usersCreateWithoutInventory_transactionsInput, usersUncheckedCreateWithoutInventory_transactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutInventory_transactionsInput
    upsert?: usersUpsertWithoutInventory_transactionsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutInventory_transactionsInput, usersUpdateWithoutInventory_transactionsInput>, usersUncheckedUpdateWithoutInventory_transactionsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type ordersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    upsert?: ordersUpsertWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_itemsInput, ordersUpdateWithoutOrder_itemsInput>, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    upsert?: productsUpsertWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_itemsInput, productsUpdateWithoutOrder_itemsInput>, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type order_itemsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type paymentsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput> | paymentsCreateWithoutOrdersInput[] | paymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutOrdersInput | paymentsCreateOrConnectWithoutOrdersInput[]
    createMany?: paymentsCreateManyOrdersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput> | paymentsCreateWithoutOrdersInput[] | paymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutOrdersInput | paymentsCreateOrConnectWithoutOrdersInput[]
    createMany?: paymentsCreateManyOrdersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type NullableEnumorders_order_statusFieldUpdateOperationsInput = {
    set?: $Enums.orders_order_status | null
  }

  export type NullableEnumorders_payment_statusFieldUpdateOperationsInput = {
    set?: $Enums.orders_payment_status | null
  }

  export type order_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type paymentsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput> | paymentsCreateWithoutOrdersInput[] | paymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutOrdersInput | paymentsCreateOrConnectWithoutOrdersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutOrdersInput | paymentsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: paymentsCreateManyOrdersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutOrdersInput | paymentsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutOrdersInput | paymentsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput> | paymentsCreateWithoutOrdersInput[] | paymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutOrdersInput | paymentsCreateOrConnectWithoutOrdersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutOrdersInput | paymentsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: paymentsCreateManyOrdersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutOrdersInput | paymentsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutOrdersInput | paymentsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ordersCreateWithoutPaymentsInput, ordersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutPaymentsInput
    connect?: ordersWhereUniqueInput
  }

  export type Enumpayments_methodFieldUpdateOperationsInput = {
    set?: $Enums.payments_method
  }

  export type NullableEnumpayments_statusFieldUpdateOperationsInput = {
    set?: $Enums.payments_status | null
  }

  export type ordersUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ordersCreateWithoutPaymentsInput, ordersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutPaymentsInput
    upsert?: ordersUpsertWithoutPaymentsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutPaymentsInput, ordersUpdateWithoutPaymentsInput>, ordersUncheckedUpdateWithoutPaymentsInput>
  }

  export type cart_itemsCreateNestedManyWithoutProductsInput = {
    create?: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput> | cart_itemsCreateWithoutProductsInput[] | cart_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductsInput | cart_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: cart_itemsCreateManyProductsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type order_itemsCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type recipesCreateNestedManyWithoutProductsInput = {
    create?: XOR<recipesCreateWithoutProductsInput, recipesUncheckedCreateWithoutProductsInput> | recipesCreateWithoutProductsInput[] | recipesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutProductsInput | recipesCreateOrConnectWithoutProductsInput[]
    createMany?: recipesCreateManyProductsInputEnvelope
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
  }

  export type cart_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput> | cart_itemsCreateWithoutProductsInput[] | cart_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductsInput | cart_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: cart_itemsCreateManyProductsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type recipesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<recipesCreateWithoutProductsInput, recipesUncheckedCreateWithoutProductsInput> | recipesCreateWithoutProductsInput[] | recipesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutProductsInput | recipesCreateOrConnectWithoutProductsInput[]
    createMany?: recipesCreateManyProductsInputEnvelope
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
  }

  export type NullableEnumproducts_statusFieldUpdateOperationsInput = {
    set?: $Enums.products_status | null
  }

  export type cart_itemsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput> | cart_itemsCreateWithoutProductsInput[] | cart_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductsInput | cart_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutProductsInput | cart_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: cart_itemsCreateManyProductsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutProductsInput | cart_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutProductsInput | cart_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type order_itemsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type categoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type recipesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<recipesCreateWithoutProductsInput, recipesUncheckedCreateWithoutProductsInput> | recipesCreateWithoutProductsInput[] | recipesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutProductsInput | recipesCreateOrConnectWithoutProductsInput[]
    upsert?: recipesUpsertWithWhereUniqueWithoutProductsInput | recipesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: recipesCreateManyProductsInputEnvelope
    set?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    disconnect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    delete?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    update?: recipesUpdateWithWhereUniqueWithoutProductsInput | recipesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: recipesUpdateManyWithWhereWithoutProductsInput | recipesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: recipesScalarWhereInput | recipesScalarWhereInput[]
  }

  export type cart_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput> | cart_itemsCreateWithoutProductsInput[] | cart_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductsInput | cart_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutProductsInput | cart_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: cart_itemsCreateManyProductsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutProductsInput | cart_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutProductsInput | cart_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type recipesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<recipesCreateWithoutProductsInput, recipesUncheckedCreateWithoutProductsInput> | recipesCreateWithoutProductsInput[] | recipesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutProductsInput | recipesCreateOrConnectWithoutProductsInput[]
    upsert?: recipesUpsertWithWhereUniqueWithoutProductsInput | recipesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: recipesCreateManyProductsInputEnvelope
    set?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    disconnect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    delete?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    update?: recipesUpdateWithWhereUniqueWithoutProductsInput | recipesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: recipesUpdateManyWithWhereWithoutProductsInput | recipesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: recipesScalarWhereInput | recipesScalarWhereInput[]
  }

  export type inventoryCreateNestedOneWithoutRecipesInput = {
    create?: XOR<inventoryCreateWithoutRecipesInput, inventoryUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutRecipesInput
    connect?: inventoryWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutRecipesInput = {
    create?: XOR<productsCreateWithoutRecipesInput, productsUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: productsCreateOrConnectWithoutRecipesInput
    connect?: productsWhereUniqueInput
  }

  export type inventoryUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<inventoryCreateWithoutRecipesInput, inventoryUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutRecipesInput
    upsert?: inventoryUpsertWithoutRecipesInput
    connect?: inventoryWhereUniqueInput
    update?: XOR<XOR<inventoryUpdateToOneWithWhereWithoutRecipesInput, inventoryUpdateWithoutRecipesInput>, inventoryUncheckedUpdateWithoutRecipesInput>
  }

  export type productsUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<productsCreateWithoutRecipesInput, productsUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: productsCreateOrConnectWithoutRecipesInput
    upsert?: productsUpsertWithoutRecipesInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutRecipesInput, productsUpdateWithoutRecipesInput>, productsUncheckedUpdateWithoutRecipesInput>
  }

  export type cartsCreateNestedOneWithoutUsersInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput
    connect?: cartsWhereUniqueInput
  }

  export type inventory_transactionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<inventory_transactionsCreateWithoutUsersInput, inventory_transactionsUncheckedCreateWithoutUsersInput> | inventory_transactionsCreateWithoutUsersInput[] | inventory_transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutUsersInput | inventory_transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: inventory_transactionsCreateManyUsersInputEnvelope
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type cartsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput
    connect?: cartsWhereUniqueInput
  }

  export type inventory_transactionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<inventory_transactionsCreateWithoutUsersInput, inventory_transactionsUncheckedCreateWithoutUsersInput> | inventory_transactionsCreateWithoutUsersInput[] | inventory_transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutUsersInput | inventory_transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: inventory_transactionsCreateManyUsersInputEnvelope
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type NullableEnumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role | null
  }

  export type cartsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput
    upsert?: cartsUpsertWithoutUsersInput
    disconnect?: cartsWhereInput | boolean
    delete?: cartsWhereInput | boolean
    connect?: cartsWhereUniqueInput
    update?: XOR<XOR<cartsUpdateToOneWithWhereWithoutUsersInput, cartsUpdateWithoutUsersInput>, cartsUncheckedUpdateWithoutUsersInput>
  }

  export type inventory_transactionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<inventory_transactionsCreateWithoutUsersInput, inventory_transactionsUncheckedCreateWithoutUsersInput> | inventory_transactionsCreateWithoutUsersInput[] | inventory_transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutUsersInput | inventory_transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: inventory_transactionsUpsertWithWhereUniqueWithoutUsersInput | inventory_transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: inventory_transactionsCreateManyUsersInputEnvelope
    set?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    disconnect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    delete?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    update?: inventory_transactionsUpdateWithWhereUniqueWithoutUsersInput | inventory_transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: inventory_transactionsUpdateManyWithWhereWithoutUsersInput | inventory_transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: inventory_transactionsScalarWhereInput | inventory_transactionsScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type cartsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput
    upsert?: cartsUpsertWithoutUsersInput
    disconnect?: cartsWhereInput | boolean
    delete?: cartsWhereInput | boolean
    connect?: cartsWhereUniqueInput
    update?: XOR<XOR<cartsUpdateToOneWithWhereWithoutUsersInput, cartsUpdateWithoutUsersInput>, cartsUncheckedUpdateWithoutUsersInput>
  }

  export type inventory_transactionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<inventory_transactionsCreateWithoutUsersInput, inventory_transactionsUncheckedCreateWithoutUsersInput> | inventory_transactionsCreateWithoutUsersInput[] | inventory_transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutUsersInput | inventory_transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: inventory_transactionsUpsertWithWhereUniqueWithoutUsersInput | inventory_transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: inventory_transactionsCreateManyUsersInputEnvelope
    set?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    disconnect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    delete?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    update?: inventory_transactionsUpdateWithWhereUniqueWithoutUsersInput | inventory_transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: inventory_transactionsUpdateManyWithWhereWithoutUsersInput | inventory_transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: inventory_transactionsScalarWhereInput | inventory_transactionsScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumcategories_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.categories_status | Enumcategories_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.categories_status[] | null
    notIn?: $Enums.categories_status[] | null
    not?: NestedEnumcategories_statusNullableFilter<$PrismaModel> | $Enums.categories_status | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumcategories_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.categories_status | Enumcategories_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.categories_status[] | null
    notIn?: $Enums.categories_status[] | null
    not?: NestedEnumcategories_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.categories_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcategories_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumcategories_statusNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnuminventory_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.inventory_status | Enuminventory_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.inventory_status[] | null
    notIn?: $Enums.inventory_status[] | null
    not?: NestedEnuminventory_statusNullableFilter<$PrismaModel> | $Enums.inventory_status | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnuminventory_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.inventory_status | Enuminventory_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.inventory_status[] | null
    notIn?: $Enums.inventory_status[] | null
    not?: NestedEnuminventory_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.inventory_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnuminventory_statusNullableFilter<$PrismaModel>
    _max?: NestedEnuminventory_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnuminventory_transactions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.inventory_transactions_type | Enuminventory_transactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.inventory_transactions_type[]
    notIn?: $Enums.inventory_transactions_type[]
    not?: NestedEnuminventory_transactions_typeFilter<$PrismaModel> | $Enums.inventory_transactions_type
  }

  export type NestedEnuminventory_transactions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.inventory_transactions_type | Enuminventory_transactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.inventory_transactions_type[]
    notIn?: $Enums.inventory_transactions_type[]
    not?: NestedEnuminventory_transactions_typeWithAggregatesFilter<$PrismaModel> | $Enums.inventory_transactions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminventory_transactions_typeFilter<$PrismaModel>
    _max?: NestedEnuminventory_transactions_typeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumorders_order_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_order_status | Enumorders_order_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_order_status[] | null
    notIn?: $Enums.orders_order_status[] | null
    not?: NestedEnumorders_order_statusNullableFilter<$PrismaModel> | $Enums.orders_order_status | null
  }

  export type NestedEnumorders_payment_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_payment_status | Enumorders_payment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_payment_status[] | null
    notIn?: $Enums.orders_payment_status[] | null
    not?: NestedEnumorders_payment_statusNullableFilter<$PrismaModel> | $Enums.orders_payment_status | null
  }

  export type NestedEnumorders_order_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_order_status | Enumorders_order_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_order_status[] | null
    notIn?: $Enums.orders_order_status[] | null
    not?: NestedEnumorders_order_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.orders_order_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorders_order_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumorders_order_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumorders_payment_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_payment_status | Enumorders_payment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_payment_status[] | null
    notIn?: $Enums.orders_payment_status[] | null
    not?: NestedEnumorders_payment_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.orders_payment_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorders_payment_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumorders_payment_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumpayments_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_method | Enumpayments_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payments_method[]
    notIn?: $Enums.payments_method[]
    not?: NestedEnumpayments_methodFilter<$PrismaModel> | $Enums.payments_method
  }

  export type NestedEnumpayments_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_status | Enumpayments_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payments_status[] | null
    notIn?: $Enums.payments_status[] | null
    not?: NestedEnumpayments_statusNullableFilter<$PrismaModel> | $Enums.payments_status | null
  }

  export type NestedEnumpayments_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_method | Enumpayments_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payments_method[]
    notIn?: $Enums.payments_method[]
    not?: NestedEnumpayments_methodWithAggregatesFilter<$PrismaModel> | $Enums.payments_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayments_methodFilter<$PrismaModel>
    _max?: NestedEnumpayments_methodFilter<$PrismaModel>
  }

  export type NestedEnumpayments_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payments_status | Enumpayments_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payments_status[] | null
    notIn?: $Enums.payments_status[] | null
    not?: NestedEnumpayments_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.payments_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayments_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumpayments_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumproducts_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.products_status | Enumproducts_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.products_status[] | null
    notIn?: $Enums.products_status[] | null
    not?: NestedEnumproducts_statusNullableFilter<$PrismaModel> | $Enums.products_status | null
  }

  export type NestedEnumproducts_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.products_status | Enumproducts_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.products_status[] | null
    notIn?: $Enums.products_status[] | null
    not?: NestedEnumproducts_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.products_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumproducts_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumproducts_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumusers_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableFilter<$PrismaModel> | $Enums.users_role | null
  }

  export type NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_roleNullableFilter<$PrismaModel>
  }

  export type cartsCreateWithoutCart_itemsInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutCartsInput
  }

  export type cartsUncheckedCreateWithoutCart_itemsInput = {
    id?: number
    user_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type cartsCreateOrConnectWithoutCart_itemsInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
  }

  export type productsCreateWithoutCart_itemsInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    image?: string | null
    description?: string | null
    sku?: string | null
    status?: $Enums.products_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
    recipes?: recipesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCart_itemsInput = {
    id?: number
    name: string
    category_id?: number | null
    price: Decimal | DecimalJsLike | number | string
    image?: string | null
    description?: string | null
    sku?: string | null
    status?: $Enums.products_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    recipes?: recipesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCart_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
  }

  export type cartsUpsertWithoutCart_itemsInput = {
    update: XOR<cartsUpdateWithoutCart_itemsInput, cartsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    where?: cartsWhereInput
  }

  export type cartsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: cartsWhereInput
    data: XOR<cartsUpdateWithoutCart_itemsInput, cartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type cartsUpdateWithoutCart_itemsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateWithoutCart_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpsertWithoutCart_itemsInput = {
    update: XOR<productsUpdateWithoutCart_itemsInput, productsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutCart_itemsInput, productsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type productsUpdateWithoutCart_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
    recipes?: recipesUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCart_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    recipes?: recipesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type cart_itemsCreateWithoutCartsInput = {
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    products: productsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateWithoutCartsInput = {
    id?: number
    product_id: number
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type cart_itemsCreateOrConnectWithoutCartsInput = {
    where: cart_itemsWhereUniqueInput
    create: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput>
  }

  export type cart_itemsCreateManyCartsInputEnvelope = {
    data: cart_itemsCreateManyCartsInput | cart_itemsCreateManyCartsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCartsInput = {
    name: string
    email: string
    phone?: string | null
    password_hash?: string | null
    address?: string | null
    role?: $Enums.users_role | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    facebook_id?: string | null
    google_id?: string | null
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCartsInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password_hash?: string | null
    address?: string | null
    role?: $Enums.users_role | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    facebook_id?: string | null
    google_id?: string | null
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCartsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
  }

  export type cart_itemsUpsertWithWhereUniqueWithoutCartsInput = {
    where: cart_itemsWhereUniqueInput
    update: XOR<cart_itemsUpdateWithoutCartsInput, cart_itemsUncheckedUpdateWithoutCartsInput>
    create: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput>
  }

  export type cart_itemsUpdateWithWhereUniqueWithoutCartsInput = {
    where: cart_itemsWhereUniqueInput
    data: XOR<cart_itemsUpdateWithoutCartsInput, cart_itemsUncheckedUpdateWithoutCartsInput>
  }

  export type cart_itemsUpdateManyWithWhereWithoutCartsInput = {
    where: cart_itemsScalarWhereInput
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyWithoutCartsInput>
  }

  export type cart_itemsScalarWhereInput = {
    AND?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
    OR?: cart_itemsScalarWhereInput[]
    NOT?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
    id?: IntFilter<"cart_items"> | number
    cart_id?: IntFilter<"cart_items"> | number
    product_id?: IntFilter<"cart_items"> | number
    quantity?: IntFilter<"cart_items"> | number
    unit_price?: DecimalFilter<"cart_items"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"cart_items"> | Decimal | DecimalJsLike | number | string
  }

  export type usersUpsertWithoutCartsInput = {
    update: XOR<usersUpdateWithoutCartsInput, usersUncheckedUpdateWithoutCartsInput>
    create: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCartsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCartsInput, usersUncheckedUpdateWithoutCartsInput>
  }

  export type usersUpdateWithoutCartsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    facebook_id?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    facebook_id?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type productsCreateWithoutCategoriesInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    image?: string | null
    description?: string | null
    sku?: string | null
    status?: $Enums.products_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    recipes?: recipesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    image?: string | null
    description?: string | null
    sku?: string | null
    status?: $Enums.products_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    recipes?: recipesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateManyCategoriesInputEnvelope = {
    data: productsCreateManyCategoriesInput | productsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    id?: IntFilter<"products"> | number
    name?: StringFilter<"products"> | string
    category_id?: IntNullableFilter<"products"> | number | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    image?: StringNullableFilter<"products"> | string | null
    description?: StringNullableFilter<"products"> | string | null
    sku?: StringNullableFilter<"products"> | string | null
    status?: Enumproducts_statusNullableFilter<"products"> | $Enums.products_status | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
  }

  export type inventory_transactionsCreateWithoutInventoryInput = {
    type: $Enums.inventory_transactions_type
    quantity: Decimal | DecimalJsLike | number | string
    note?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutInventory_transactionsInput
  }

  export type inventory_transactionsUncheckedCreateWithoutInventoryInput = {
    id?: number
    type: $Enums.inventory_transactions_type
    quantity: Decimal | DecimalJsLike | number | string
    note?: string | null
    created_by?: number | null
    created_at?: Date | string | null
  }

  export type inventory_transactionsCreateOrConnectWithoutInventoryInput = {
    where: inventory_transactionsWhereUniqueInput
    create: XOR<inventory_transactionsCreateWithoutInventoryInput, inventory_transactionsUncheckedCreateWithoutInventoryInput>
  }

  export type inventory_transactionsCreateManyInventoryInputEnvelope = {
    data: inventory_transactionsCreateManyInventoryInput | inventory_transactionsCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type recipesCreateWithoutInventoryInput = {
    quantity_used: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    products: productsCreateNestedOneWithoutRecipesInput
  }

  export type recipesUncheckedCreateWithoutInventoryInput = {
    id?: number
    product_id: number
    quantity_used: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type recipesCreateOrConnectWithoutInventoryInput = {
    where: recipesWhereUniqueInput
    create: XOR<recipesCreateWithoutInventoryInput, recipesUncheckedCreateWithoutInventoryInput>
  }

  export type recipesCreateManyInventoryInputEnvelope = {
    data: recipesCreateManyInventoryInput | recipesCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type inventory_transactionsUpsertWithWhereUniqueWithoutInventoryInput = {
    where: inventory_transactionsWhereUniqueInput
    update: XOR<inventory_transactionsUpdateWithoutInventoryInput, inventory_transactionsUncheckedUpdateWithoutInventoryInput>
    create: XOR<inventory_transactionsCreateWithoutInventoryInput, inventory_transactionsUncheckedCreateWithoutInventoryInput>
  }

  export type inventory_transactionsUpdateWithWhereUniqueWithoutInventoryInput = {
    where: inventory_transactionsWhereUniqueInput
    data: XOR<inventory_transactionsUpdateWithoutInventoryInput, inventory_transactionsUncheckedUpdateWithoutInventoryInput>
  }

  export type inventory_transactionsUpdateManyWithWhereWithoutInventoryInput = {
    where: inventory_transactionsScalarWhereInput
    data: XOR<inventory_transactionsUpdateManyMutationInput, inventory_transactionsUncheckedUpdateManyWithoutInventoryInput>
  }

  export type inventory_transactionsScalarWhereInput = {
    AND?: inventory_transactionsScalarWhereInput | inventory_transactionsScalarWhereInput[]
    OR?: inventory_transactionsScalarWhereInput[]
    NOT?: inventory_transactionsScalarWhereInput | inventory_transactionsScalarWhereInput[]
    id?: IntFilter<"inventory_transactions"> | number
    inventory_id?: IntFilter<"inventory_transactions"> | number
    type?: Enuminventory_transactions_typeFilter<"inventory_transactions"> | $Enums.inventory_transactions_type
    quantity?: DecimalFilter<"inventory_transactions"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"inventory_transactions"> | string | null
    created_by?: IntNullableFilter<"inventory_transactions"> | number | null
    created_at?: DateTimeNullableFilter<"inventory_transactions"> | Date | string | null
  }

  export type recipesUpsertWithWhereUniqueWithoutInventoryInput = {
    where: recipesWhereUniqueInput
    update: XOR<recipesUpdateWithoutInventoryInput, recipesUncheckedUpdateWithoutInventoryInput>
    create: XOR<recipesCreateWithoutInventoryInput, recipesUncheckedCreateWithoutInventoryInput>
  }

  export type recipesUpdateWithWhereUniqueWithoutInventoryInput = {
    where: recipesWhereUniqueInput
    data: XOR<recipesUpdateWithoutInventoryInput, recipesUncheckedUpdateWithoutInventoryInput>
  }

  export type recipesUpdateManyWithWhereWithoutInventoryInput = {
    where: recipesScalarWhereInput
    data: XOR<recipesUpdateManyMutationInput, recipesUncheckedUpdateManyWithoutInventoryInput>
  }

  export type recipesScalarWhereInput = {
    AND?: recipesScalarWhereInput | recipesScalarWhereInput[]
    OR?: recipesScalarWhereInput[]
    NOT?: recipesScalarWhereInput | recipesScalarWhereInput[]
    id?: IntFilter<"recipes"> | number
    product_id?: IntFilter<"recipes"> | number
    inventory_id?: IntFilter<"recipes"> | number
    quantity_used?: DecimalFilter<"recipes"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"recipes"> | Date | string | null
  }

  export type inventoryCreateWithoutInventory_transactionsInput = {
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_quantity?: Decimal | DecimalJsLike | number | string | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    supplier_name?: string | null
    status?: $Enums.inventory_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    recipes?: recipesCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutInventory_transactionsInput = {
    id?: number
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_quantity?: Decimal | DecimalJsLike | number | string | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    supplier_name?: string | null
    status?: $Enums.inventory_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    recipes?: recipesUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryCreateOrConnectWithoutInventory_transactionsInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutInventory_transactionsInput, inventoryUncheckedCreateWithoutInventory_transactionsInput>
  }

  export type usersCreateWithoutInventory_transactionsInput = {
    name: string
    email: string
    phone?: string | null
    password_hash?: string | null
    address?: string | null
    role?: $Enums.users_role | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    facebook_id?: string | null
    google_id?: string | null
    carts?: cartsCreateNestedOneWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutInventory_transactionsInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password_hash?: string | null
    address?: string | null
    role?: $Enums.users_role | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    facebook_id?: string | null
    google_id?: string | null
    carts?: cartsUncheckedCreateNestedOneWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutInventory_transactionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutInventory_transactionsInput, usersUncheckedCreateWithoutInventory_transactionsInput>
  }

  export type inventoryUpsertWithoutInventory_transactionsInput = {
    update: XOR<inventoryUpdateWithoutInventory_transactionsInput, inventoryUncheckedUpdateWithoutInventory_transactionsInput>
    create: XOR<inventoryCreateWithoutInventory_transactionsInput, inventoryUncheckedCreateWithoutInventory_transactionsInput>
    where?: inventoryWhereInput
  }

  export type inventoryUpdateToOneWithWhereWithoutInventory_transactionsInput = {
    where?: inventoryWhereInput
    data: XOR<inventoryUpdateWithoutInventory_transactionsInput, inventoryUncheckedUpdateWithoutInventory_transactionsInput>
  }

  export type inventoryUpdateWithoutInventory_transactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminventory_statusFieldUpdateOperationsInput | $Enums.inventory_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipes?: recipesUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutInventory_transactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminventory_statusFieldUpdateOperationsInput | $Enums.inventory_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipes?: recipesUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type usersUpsertWithoutInventory_transactionsInput = {
    update: XOR<usersUpdateWithoutInventory_transactionsInput, usersUncheckedUpdateWithoutInventory_transactionsInput>
    create: XOR<usersCreateWithoutInventory_transactionsInput, usersUncheckedCreateWithoutInventory_transactionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutInventory_transactionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutInventory_transactionsInput, usersUncheckedUpdateWithoutInventory_transactionsInput>
  }

  export type usersUpdateWithoutInventory_transactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    facebook_id?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUpdateOneWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutInventory_transactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    facebook_id?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUncheckedUpdateOneWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ordersCreateWithoutOrder_itemsInput = {
    order_code: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    note?: string | null
    order_status?: $Enums.orders_order_status | null
    payment_status?: $Enums.orders_payment_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    user_id: number
    order_code: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    note?: string | null
    order_status?: $Enums.orders_order_status | null
    payment_status?: $Enums.orders_payment_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productsCreateWithoutOrder_itemsInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    image?: string | null
    description?: string | null
    sku?: string | null
    status?: $Enums.products_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
    recipes?: recipesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    name: string
    category_id?: number | null
    price: Decimal | DecimalJsLike | number | string
    image?: string | null
    description?: string | null
    sku?: string | null
    status?: $Enums.products_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    recipes?: recipesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutOrder_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ordersUpsertWithoutOrder_itemsInput = {
    update: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ordersUpdateWithoutOrder_itemsInput = {
    order_code?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    order_status?: NullableEnumorders_order_statusFieldUpdateOperationsInput | $Enums.orders_order_status | null
    payment_status?: NullableEnumorders_payment_statusFieldUpdateOperationsInput | $Enums.orders_payment_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_code?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    order_status?: NullableEnumorders_order_statusFieldUpdateOperationsInput | $Enums.orders_order_status | null
    payment_status?: NullableEnumorders_payment_statusFieldUpdateOperationsInput | $Enums.orders_payment_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type productsUpsertWithoutOrder_itemsInput = {
    update: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateWithoutOrder_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
    recipes?: recipesUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    recipes?: recipesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type order_itemsCreateWithoutOrdersInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    products: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutOrdersInput = {
    id?: number
    product_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateOrConnectWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsCreateManyOrdersInputEnvelope = {
    data: order_itemsCreateManyOrdersInput | order_itemsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutOrdersInput = {
    name: string
    email: string
    phone?: string | null
    password_hash?: string | null
    address?: string | null
    role?: $Enums.users_role | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    facebook_id?: string | null
    google_id?: string | null
    carts?: cartsCreateNestedOneWithoutUsersInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password_hash?: string | null
    address?: string | null
    role?: $Enums.users_role | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    facebook_id?: string | null
    google_id?: string | null
    carts?: cartsUncheckedCreateNestedOneWithoutUsersInput
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type paymentsCreateWithoutOrdersInput = {
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.payments_method
    status?: $Enums.payments_status | null
    transaction_code?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type paymentsUncheckedCreateWithoutOrdersInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.payments_method
    status?: $Enums.payments_status | null
    transaction_code?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type paymentsCreateOrConnectWithoutOrdersInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput>
  }

  export type paymentsCreateManyOrdersInputEnvelope = {
    data: paymentsCreateManyOrdersInput | paymentsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type order_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type order_itemsScalarWhereInput = {
    AND?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    OR?: order_itemsScalarWhereInput[]
    NOT?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: IntFilter<"order_items"> | number
    product_id?: IntFilter<"order_items"> | number
    quantity?: IntFilter<"order_items"> | number
    unit_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    facebook_id?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUpdateOneWithoutUsersNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    facebook_id?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUncheckedUpdateOneWithoutUsersNestedInput
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type paymentsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutOrdersInput, paymentsUncheckedUpdateWithoutOrdersInput>
    create: XOR<paymentsCreateWithoutOrdersInput, paymentsUncheckedCreateWithoutOrdersInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutOrdersInput, paymentsUncheckedUpdateWithoutOrdersInput>
  }

  export type paymentsUpdateManyWithWhereWithoutOrdersInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type paymentsScalarWhereInput = {
    AND?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    OR?: paymentsScalarWhereInput[]
    NOT?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    id?: IntFilter<"payments"> | number
    order_id?: IntFilter<"payments"> | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    method?: Enumpayments_methodFilter<"payments"> | $Enums.payments_method
    status?: Enumpayments_statusNullableFilter<"payments"> | $Enums.payments_status | null
    transaction_code?: StringNullableFilter<"payments"> | string | null
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    created_at?: DateTimeNullableFilter<"payments"> | Date | string | null
  }

  export type ordersCreateWithoutPaymentsInput = {
    order_code: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    note?: string | null
    order_status?: $Enums.orders_order_status | null
    payment_status?: $Enums.orders_payment_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutPaymentsInput = {
    id?: number
    user_id: number
    order_code: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    note?: string | null
    order_status?: $Enums.orders_order_status | null
    payment_status?: $Enums.orders_payment_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutPaymentsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutPaymentsInput, ordersUncheckedCreateWithoutPaymentsInput>
  }

  export type ordersUpsertWithoutPaymentsInput = {
    update: XOR<ordersUpdateWithoutPaymentsInput, ordersUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ordersCreateWithoutPaymentsInput, ordersUncheckedCreateWithoutPaymentsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutPaymentsInput, ordersUncheckedUpdateWithoutPaymentsInput>
  }

  export type ordersUpdateWithoutPaymentsInput = {
    order_code?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    order_status?: NullableEnumorders_order_statusFieldUpdateOperationsInput | $Enums.orders_order_status | null
    payment_status?: NullableEnumorders_payment_statusFieldUpdateOperationsInput | $Enums.orders_payment_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_code?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    order_status?: NullableEnumorders_order_statusFieldUpdateOperationsInput | $Enums.orders_order_status | null
    payment_status?: NullableEnumorders_payment_statusFieldUpdateOperationsInput | $Enums.orders_payment_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type cart_itemsCreateWithoutProductsInput = {
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    carts: cartsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateWithoutProductsInput = {
    id?: number
    cart_id: number
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type cart_itemsCreateOrConnectWithoutProductsInput = {
    where: cart_itemsWhereUniqueInput
    create: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput>
  }

  export type cart_itemsCreateManyProductsInputEnvelope = {
    data: cart_itemsCreateManyProductsInput | cart_itemsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type order_itemsCreateWithoutProductsInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutProductsInput = {
    id?: number
    order_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateOrConnectWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsCreateManyProductsInputEnvelope = {
    data: order_itemsCreateManyProductsInput | order_itemsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutProductsInput = {
    name: string
    status?: $Enums.categories_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    status?: $Enums.categories_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type recipesCreateWithoutProductsInput = {
    quantity_used: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    inventory: inventoryCreateNestedOneWithoutRecipesInput
  }

  export type recipesUncheckedCreateWithoutProductsInput = {
    id?: number
    inventory_id: number
    quantity_used: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type recipesCreateOrConnectWithoutProductsInput = {
    where: recipesWhereUniqueInput
    create: XOR<recipesCreateWithoutProductsInput, recipesUncheckedCreateWithoutProductsInput>
  }

  export type recipesCreateManyProductsInputEnvelope = {
    data: recipesCreateManyProductsInput | recipesCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type cart_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: cart_itemsWhereUniqueInput
    update: XOR<cart_itemsUpdateWithoutProductsInput, cart_itemsUncheckedUpdateWithoutProductsInput>
    create: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput>
  }

  export type cart_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: cart_itemsWhereUniqueInput
    data: XOR<cart_itemsUpdateWithoutProductsInput, cart_itemsUncheckedUpdateWithoutProductsInput>
  }

  export type cart_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: cart_itemsScalarWhereInput
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyWithoutProductsInput>
  }

  export type order_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutProductsInput>
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumcategories_statusFieldUpdateOperationsInput | $Enums.categories_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumcategories_statusFieldUpdateOperationsInput | $Enums.categories_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipesUpsertWithWhereUniqueWithoutProductsInput = {
    where: recipesWhereUniqueInput
    update: XOR<recipesUpdateWithoutProductsInput, recipesUncheckedUpdateWithoutProductsInput>
    create: XOR<recipesCreateWithoutProductsInput, recipesUncheckedCreateWithoutProductsInput>
  }

  export type recipesUpdateWithWhereUniqueWithoutProductsInput = {
    where: recipesWhereUniqueInput
    data: XOR<recipesUpdateWithoutProductsInput, recipesUncheckedUpdateWithoutProductsInput>
  }

  export type recipesUpdateManyWithWhereWithoutProductsInput = {
    where: recipesScalarWhereInput
    data: XOR<recipesUpdateManyMutationInput, recipesUncheckedUpdateManyWithoutProductsInput>
  }

  export type inventoryCreateWithoutRecipesInput = {
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_quantity?: Decimal | DecimalJsLike | number | string | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    supplier_name?: string | null
    status?: $Enums.inventory_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutRecipesInput = {
    id?: number
    name: string
    unit: string
    quantity?: Decimal | DecimalJsLike | number | string | null
    min_quantity?: Decimal | DecimalJsLike | number | string | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    supplier_name?: string | null
    status?: $Enums.inventory_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryCreateOrConnectWithoutRecipesInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutRecipesInput, inventoryUncheckedCreateWithoutRecipesInput>
  }

  export type productsCreateWithoutRecipesInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    image?: string | null
    description?: string | null
    sku?: string | null
    status?: $Enums.products_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutRecipesInput = {
    id?: number
    name: string
    category_id?: number | null
    price: Decimal | DecimalJsLike | number | string
    image?: string | null
    description?: string | null
    sku?: string | null
    status?: $Enums.products_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutRecipesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutRecipesInput, productsUncheckedCreateWithoutRecipesInput>
  }

  export type inventoryUpsertWithoutRecipesInput = {
    update: XOR<inventoryUpdateWithoutRecipesInput, inventoryUncheckedUpdateWithoutRecipesInput>
    create: XOR<inventoryCreateWithoutRecipesInput, inventoryUncheckedCreateWithoutRecipesInput>
    where?: inventoryWhereInput
  }

  export type inventoryUpdateToOneWithWhereWithoutRecipesInput = {
    where?: inventoryWhereInput
    data: XOR<inventoryUpdateWithoutRecipesInput, inventoryUncheckedUpdateWithoutRecipesInput>
  }

  export type inventoryUpdateWithoutRecipesInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminventory_statusFieldUpdateOperationsInput | $Enums.inventory_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory_transactions?: inventory_transactionsUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    min_quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnuminventory_statusFieldUpdateOperationsInput | $Enums.inventory_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type productsUpsertWithoutRecipesInput = {
    update: XOR<productsUpdateWithoutRecipesInput, productsUncheckedUpdateWithoutRecipesInput>
    create: XOR<productsCreateWithoutRecipesInput, productsUncheckedCreateWithoutRecipesInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutRecipesInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutRecipesInput, productsUncheckedUpdateWithoutRecipesInput>
  }

  export type productsUpdateWithoutRecipesInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type cartsCreateWithoutUsersInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutCartsInput
  }

  export type cartsUncheckedCreateWithoutUsersInput = {
    id?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutCartsInput
  }

  export type cartsCreateOrConnectWithoutUsersInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
  }

  export type inventory_transactionsCreateWithoutUsersInput = {
    type: $Enums.inventory_transactions_type
    quantity: Decimal | DecimalJsLike | number | string
    note?: string | null
    created_at?: Date | string | null
    inventory: inventoryCreateNestedOneWithoutInventory_transactionsInput
  }

  export type inventory_transactionsUncheckedCreateWithoutUsersInput = {
    id?: number
    inventory_id: number
    type: $Enums.inventory_transactions_type
    quantity: Decimal | DecimalJsLike | number | string
    note?: string | null
    created_at?: Date | string | null
  }

  export type inventory_transactionsCreateOrConnectWithoutUsersInput = {
    where: inventory_transactionsWhereUniqueInput
    create: XOR<inventory_transactionsCreateWithoutUsersInput, inventory_transactionsUncheckedCreateWithoutUsersInput>
  }

  export type inventory_transactionsCreateManyUsersInputEnvelope = {
    data: inventory_transactionsCreateManyUsersInput | inventory_transactionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUsersInput = {
    order_code: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    note?: string | null
    order_status?: $Enums.orders_order_status | null
    payment_status?: $Enums.orders_payment_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    payments?: paymentsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    id?: number
    order_code: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    note?: string | null
    order_status?: $Enums.orders_order_status | null
    payment_status?: $Enums.orders_payment_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type cartsUpsertWithoutUsersInput = {
    update: XOR<cartsUpdateWithoutUsersInput, cartsUncheckedUpdateWithoutUsersInput>
    create: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
    where?: cartsWhereInput
  }

  export type cartsUpdateToOneWithWhereWithoutUsersInput = {
    where?: cartsWhereInput
    data: XOR<cartsUpdateWithoutUsersInput, cartsUncheckedUpdateWithoutUsersInput>
  }

  export type cartsUpdateWithoutUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutCartsNestedInput
  }

  export type inventory_transactionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: inventory_transactionsWhereUniqueInput
    update: XOR<inventory_transactionsUpdateWithoutUsersInput, inventory_transactionsUncheckedUpdateWithoutUsersInput>
    create: XOR<inventory_transactionsCreateWithoutUsersInput, inventory_transactionsUncheckedCreateWithoutUsersInput>
  }

  export type inventory_transactionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: inventory_transactionsWhereUniqueInput
    data: XOR<inventory_transactionsUpdateWithoutUsersInput, inventory_transactionsUncheckedUpdateWithoutUsersInput>
  }

  export type inventory_transactionsUpdateManyWithWhereWithoutUsersInput = {
    where: inventory_transactionsScalarWhereInput
    data: XOR<inventory_transactionsUpdateManyMutationInput, inventory_transactionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    user_id?: IntFilter<"orders"> | number
    order_code?: StringFilter<"orders"> | string
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFilter<"orders"> | string
    note?: StringNullableFilter<"orders"> | string | null
    order_status?: Enumorders_order_statusNullableFilter<"orders"> | $Enums.orders_order_status | null
    payment_status?: Enumorders_payment_statusNullableFilter<"orders"> | $Enums.orders_payment_status | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"orders"> | Date | string | null
  }

  export type cart_itemsCreateManyCartsInput = {
    id?: number
    product_id: number
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type cart_itemsUpdateWithoutCartsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    products?: productsUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type cart_itemsUncheckedUpdateManyWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type productsCreateManyCategoriesInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    image?: string | null
    description?: string | null
    sku?: string | null
    status?: $Enums.products_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type productsUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    recipes?: recipesUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    recipes?: recipesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsCreateManyInventoryInput = {
    id?: number
    type: $Enums.inventory_transactions_type
    quantity: Decimal | DecimalJsLike | number | string
    note?: string | null
    created_by?: number | null
    created_at?: Date | string | null
  }

  export type recipesCreateManyInventoryInput = {
    id?: number
    product_id: number
    quantity_used: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type inventory_transactionsUpdateWithoutInventoryInput = {
    type?: Enuminventory_transactions_typeFieldUpdateOperationsInput | $Enums.inventory_transactions_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutInventory_transactionsNestedInput
  }

  export type inventory_transactionsUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enuminventory_transactions_typeFieldUpdateOperationsInput | $Enums.inventory_transactions_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsUncheckedUpdateManyWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enuminventory_transactions_typeFieldUpdateOperationsInput | $Enums.inventory_transactions_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipesUpdateWithoutInventoryInput = {
    quantity_used?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type recipesUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity_used?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipesUncheckedUpdateManyWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity_used?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsCreateManyOrdersInput = {
    id?: number
    product_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type paymentsCreateManyOrdersInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.payments_method
    status?: $Enums.payments_status | null
    transaction_code?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_itemsUpdateWithoutOrdersInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    products?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type paymentsUpdateWithoutOrdersInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayments_methodFieldUpdateOperationsInput | $Enums.payments_method
    status?: NullableEnumpayments_statusFieldUpdateOperationsInput | $Enums.payments_status | null
    transaction_code?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayments_methodFieldUpdateOperationsInput | $Enums.payments_method
    status?: NullableEnumpayments_statusFieldUpdateOperationsInput | $Enums.payments_status | null
    transaction_code?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayments_methodFieldUpdateOperationsInput | $Enums.payments_method
    status?: NullableEnumpayments_statusFieldUpdateOperationsInput | $Enums.payments_status | null
    transaction_code?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_itemsCreateManyProductsInput = {
    id?: number
    cart_id: number
    quantity?: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateManyProductsInput = {
    id?: number
    order_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type recipesCreateManyProductsInput = {
    id?: number
    inventory_id: number
    quantity_used: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type cart_itemsUpdateWithoutProductsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carts?: cartsUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type cart_itemsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateWithoutProductsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type recipesUpdateWithoutProductsInput = {
    quantity_used?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type recipesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventory_id?: IntFieldUpdateOperationsInput | number
    quantity_used?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipesUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventory_id?: IntFieldUpdateOperationsInput | number
    quantity_used?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsCreateManyUsersInput = {
    id?: number
    inventory_id: number
    type: $Enums.inventory_transactions_type
    quantity: Decimal | DecimalJsLike | number | string
    note?: string | null
    created_at?: Date | string | null
  }

  export type ordersCreateManyUsersInput = {
    id?: number
    order_code: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address: string
    note?: string | null
    order_status?: $Enums.orders_order_status | null
    payment_status?: $Enums.orders_payment_status | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type inventory_transactionsUpdateWithoutUsersInput = {
    type?: Enuminventory_transactions_typeFieldUpdateOperationsInput | $Enums.inventory_transactions_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateOneRequiredWithoutInventory_transactionsNestedInput
  }

  export type inventory_transactionsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventory_id?: IntFieldUpdateOperationsInput | number
    type?: Enuminventory_transactions_typeFieldUpdateOperationsInput | $Enums.inventory_transactions_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventory_id?: IntFieldUpdateOperationsInput | number
    type?: Enuminventory_transactions_typeFieldUpdateOperationsInput | $Enums.inventory_transactions_type
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUpdateWithoutUsersInput = {
    order_code?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    order_status?: NullableEnumorders_order_statusFieldUpdateOperationsInput | $Enums.orders_order_status | null
    payment_status?: NullableEnumorders_payment_statusFieldUpdateOperationsInput | $Enums.orders_payment_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    payments?: paymentsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_code?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    order_status?: NullableEnumorders_order_statusFieldUpdateOperationsInput | $Enums.orders_order_status | null
    payment_status?: NullableEnumorders_payment_statusFieldUpdateOperationsInput | $Enums.orders_payment_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_code?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    order_status?: NullableEnumorders_order_statusFieldUpdateOperationsInput | $Enums.orders_order_status | null
    payment_status?: NullableEnumorders_payment_statusFieldUpdateOperationsInput | $Enums.orders_payment_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}