# Savvy.no

This is the source code for the Savvy.no website. 

## Getting Started

#### Package manager

It is highly recommended to use [Volta](https://volta.sh/) for this project to automatically select the correct versions of Node and Yarn.

```
curl https://get.volta.sh | bash
volta install node
```

_Current versions are defined in `<root>/package.json`, under the `volta` section._

#### Environment variables

We use Doppler to synchronize our environment variables. There is no need to have .env files locally in this project. If you don't have access to Doppler, simply request access from hakon@savvy.no. The project in Doppler is called savvy-no and the dev enrivonment should be used when working locally.

To install Doppler:

```
brew install dopplerhq/cli/doppler
```

Log in to doppler with a savvy.no domain

```
doppler login
```

This will open a browser window and allow you to log in.

<!-- Installation -->

### Setup

Set up the project (make sure you have installed and logged in to doppler before you begin)

```bash
yarn setup
```

This command will set up doppler and install all dependencies.


```bash
yarn dev
```

Start the development server.