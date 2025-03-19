# Use an official Node.js Dev Container image
FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Enable Corepack (which manages Yarn versions)
RUN corepack enable

# Install specific Yarn version (v4.6.0)
RUN corepack prepare yarn@4.6.0 --activate

# Install OpenJDK (Java 17, which is compatible with most ANTLR versions)
RUN apt-get update && apt-get install -y openjdk-17-jdk && rm -rf /var/lib/apt/lists/*

# Set JAVA_HOME environment variable
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH="$JAVA_HOME/bin:$PATH"