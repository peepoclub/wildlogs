# Twitch Simple Logs

Simple log app on JavaScript

## Requirements

- [Node.js LTS](https://nodejs.dev/)
- [pnpm](https://pnpm.io)

## Using

1. Install dependencies

   ```
   pnpm install
   ```

2. Copy `.env.example` content, create `.env` file and use your variable values

3. Push schema to your db

   ```
   pnpx prisma db push
   ```

4. Generate Prisma client

   ```
   pnpx prisma generate
   ```

5. Run your app

   ```
   pnpm start
   ```

## Config example (.env)

```env
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#using-environment-variables

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server (Preview) and MongoDB (Preview).
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://my_cool_username:supersafepassword007@localhost:3306/logs"

# Channels are splitted by "," (without spaces)

CHANNELS="forsen,pajlada,nymn"
```

## License

Licensed under [GPL-3.0](https://github.com/peepoclub/twitch-simple-logs/blob/main/LICENSE)

