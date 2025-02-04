A planning tool to find the most suitable practice time.

# 1. Create a Migration:

Open a terminal in the backend project directory and run:

`dotnet ef migrations add InitialCreate`

This command scaffolds a migration named `InitialCreate` based on the current model.

# 2. Update the Database:

After creating the migration, apply it to the database with:

`dotnet ef database update`

This command creates the database (if it doesn’t exist) and applies the migration, creating the tables defined in the `AppDbContext`.
