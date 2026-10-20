# Mission: SAP CAP (Node.js)

## Why
Build a deep, working command of the SAP Cloud Application Programming Model, so I can design and ship Clean Core extensions to S/4HANA as CAP services on BTP, without custom ABAP in S/4HANA.

## Success looks like
- Model a small real-work domain in CDS (entities, associations, compositions, aspects) without copying a sample.
- Expose it as a CAP service on Node.js with custom handlers, tested locally on SQLite.
- Consume the S/4HANA Business Partner released OData API as a remote service (mocked locally).
- Protect it with `@requires` / `@restrict`, and surface it in a Fiori Elements app driven by annotations.
- Deploy to BTP Cloud Foundry with HANA Cloud and IAS SSO, and explain why each piece works.

## Constraints
- Local-first: SQLite, mocked auth, mocked S/4HANA. BTP comes in a later phase.
- Node.js with TypeScript. Staged path, one runnable check per stage.
- I write the code; the teacher reviews and answers questions.

## Out of scope
- CAP Java.
- Custom ABAP or in-stack S/4HANA extensibility.
- Freestyle UI5 (Fiori Elements only, for now).
