IF NOT EXISTS(SELECT 1 FROM sys.databases WHERE name='studentDB')
    CREATE DATABASE [studentDB]
GO

-- CREATE LOGIN myapp_login WITH PASSWORD='My_App_1234', DEFAULT_DATABASE=myapp;
-- go
-- CREATE USER myapp FOR LOGIN myapp_login WITH DEFAULT_SCHEMA=dbo;
-- go
-- ALTER ROLE db_owner ADD MEMBER myapp;
-- go