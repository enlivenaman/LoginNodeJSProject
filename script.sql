USE [master]
GO
/****** Object:  Database [adminproject]    Script Date: 07-06-2018 18:40:43 ******/
CREATE DATABASE [adminproject]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'adminproject', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\adminproject.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'adminproject_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\adminproject_log.ldf' , SIZE = 2048KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [adminproject] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [adminproject].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [adminproject] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [adminproject] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [adminproject] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [adminproject] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [adminproject] SET ARITHABORT OFF 
GO
ALTER DATABASE [adminproject] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [adminproject] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [adminproject] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [adminproject] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [adminproject] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [adminproject] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [adminproject] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [adminproject] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [adminproject] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [adminproject] SET  DISABLE_BROKER 
GO
ALTER DATABASE [adminproject] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [adminproject] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [adminproject] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [adminproject] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [adminproject] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [adminproject] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [adminproject] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [adminproject] SET RECOVERY FULL 
GO
ALTER DATABASE [adminproject] SET  MULTI_USER 
GO
ALTER DATABASE [adminproject] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [adminproject] SET DB_CHAINING OFF 
GO
ALTER DATABASE [adminproject] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [adminproject] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
EXEC sys.sp_db_vardecimal_storage_format N'adminproject', N'ON'
GO
USE [adminproject]
GO
/****** Object:  Table [dbo].[User]    Script Date: 07-06-2018 18:40:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[userId] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[passwordHash] [varchar](max) NULL,
	[email] [nvarchar](50) NOT NULL,
	[mobile] [numeric](18, 0) NOT NULL,
	[dob] [date] NOT NULL,
	[timestamp] [timestamp] NOT NULL,
	[isActive] [tinyint] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[User] ADD  DEFAULT ((1)) FOR [isActive]
GO
/****** Object:  StoredProcedure [dbo].[verifyUser]    Script Date: 07-06-2018 18:40:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Aman Saxena
-- Create date: 7th june 2018
-- Description:	verify user using password
-- =============================================
CREATE PROCEDURE [dbo].[verifyUser]
	-- Add the parameters for the stored procedure here
	@mobile varchar
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT passwordHash from [User] where mobile=@mobile;
END
GO
USE [master]
GO
ALTER DATABASE [adminproject] SET  READ_WRITE 
GO
