## Getting Started

Doppler:
There are some secrets that you need in order to run the site, these can be found in doppler. If you don't have access to doppler, simply request access from hakon@savvy.no

The project in doppler is called savvy-no and the dev enrivonment should be used when working locally.

Running the development server:
Then, run the development server with the doppler dev environment:

```bash
doppler run yarn dev
```

### Feature flags:

- FEATURE_CV_PARTNER_INTEGRATION_ENABLED - Enables the integration with CVPartner. Usually disabled when working locally as it makes dynamic page loads rather slow.
