# Development Process

## Must have
* at least 2 environments (sandbox, production).
* CI/CD configured but deploying to prod once a week.
* CI/CD Pipeline minimal steps => lint (prettier) -> test -> e2e test (e2e once a day in another job) -> deploy
* Task belongs to a release and has states => TODO -> DONE -> SANDBOX -> READY FOR PROD -> PRODUCTION -> CLOSE
* To be deployed into sandbox should be approved by the TL and pass all the checkbox from the definition of done.
* Trunk base development using feature flags.
* Commits has to be atomics and using the number of the ticket involved in the message.

