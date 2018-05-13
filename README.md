# Introduction

This is meant to demonstrate scalable cloud architectures in a way that still
doesn't cause me to go bankrupt.

The long-term goal is to demonstrate a "record viewer" type of application that
lets people see their own record, scaling to ~500K users, while putting the
scaling burden on a cloud provider instead of requiring a huge dedicated team.

Since I still have free tier left, I'm trying for GCP but I envision that the
same concepts would apply fairly equally.

# Dependencies

- Intended to run in Google Cloud Platform
- Node.js to support use of Cloud Functions

# Development Infrastructure

See the separate [rabornrecord-docker-devenv](devenv) module for a simplistic
Docker setup (Dockerfile and setup/run scripts) that are meant to support
modules like this.  In particular, the GCP Cloud Functions emulator.

# Roadmap

[ ]: Get a scalable record viewer microservice impl stood up.
[ ]: Show off a record at all (completely fake).
[ ]: Add authentication and authorization using a scalable IDaaS.
[ ]: Specify APIs in use using Swagger / OAS 2.0.
[ ]: Add a ton of fake records of the right format (compliant with API).
[ ]: Load testing.

[devenv]: https://github.com/purinchu/rabornrecord-docker-devenv
