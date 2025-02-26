FROM mcr.microsoft.com/dotnet/sdk:8.0 as build
WORKDIR /app
EXPOSE 80
# Copy csproj and restore as distinct layers. Use the same copy command
# for every dockerfile in project to take advantage of caching
COPY AuctionHive.sln AuctionHive.sln
COPY src/AuctionService/AuctionService.csproj src/AuctionService/AuctionService.csproj
COPY src/SearchService/SearchService.csproj src/SearchService/SearchService.csproj
COPY src/GatewayService/GatewayService.csproj src/GatewayService/GatewayService.csproj
COPY src/Contracts/Contracts.csproj src/Contracts/Contracts.csproj
COPY src/IdentityService/IdentityService.csproj src/IdentityService/IdentityService.csproj

# Restore all projects
RUN dotnet restore AuctionHive.sln

# Copy app folders

COPY src/SearchService src/SearchService
COPY src/Contracts src/Contracts

WORKDIR /app/src/SearchService
RUN dotnet publish -c Release -o /app/src/out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/src/out .
ENTRYPOINT ["dotnet", "SearchService.dll"]