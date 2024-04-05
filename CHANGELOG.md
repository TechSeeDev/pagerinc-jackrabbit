# [5.5.0](https://github.com/pagerinc/jackrabbit/compare/v5.4.4...v5.5.0) (2024-04-05)


### Features

* **ODIN-169:** improve NR transaction naming in jackrabbit ([#989](https://github.com/pagerinc/jackrabbit/issues/989)) ([79096b3](https://github.com/pagerinc/jackrabbit/commit/79096b357e486b7e988a1b3ecfe7d3ef987c116f))

## [5.4.4](https://github.com/pagerinc/jackrabbit/compare/v5.4.3...v5.4.4) (2022-11-07)


### Bug Fixes

* allow empty payloads ([#942](https://github.com/pagerinc/jackrabbit/issues/942)) ([af1e3ae](https://github.com/pagerinc/jackrabbit/commit/af1e3ae7e8d437b86e56f4c98b073d9d0e138ddf))

## [5.4.3](https://github.com/pagerinc/jackrabbit/compare/v5.4.2...v5.4.3) (2022-07-14)


### Bug Fixes

* connection failure logic to better handle more connection errors ([#893](https://github.com/pagerinc/jackrabbit/issues/893)) ([e360514](https://github.com/pagerinc/jackrabbit/commit/e3605147cf0ba4a8987a6cf720ce87a41fa12ca2))

## [5.4.2](https://github.com/pagerinc/jackrabbit/compare/v5.4.1...v5.4.2) (2022-06-10)


### Bug Fixes

* support connection reset errors ([#881](https://github.com/pagerinc/jackrabbit/issues/881)) ([e4b536f](https://github.com/pagerinc/jackrabbit/commit/e4b536fb09091f0c3d8ee197916d554ef07d987d))

## [5.4.1](https://github.com/pagerinc/jackrabbit/compare/v5.4.0...v5.4.1) (2022-04-25)


### Bug Fixes

* reply queue names not updated and race cond ([#872](https://github.com/pagerinc/jackrabbit/issues/872)) ([34ecacf](https://github.com/pagerinc/jackrabbit/commit/34ecacff36271b8d1d66abe1c6a0b80cae0ce4e8))

# [5.4.0](https://github.com/pagerinc/jackrabbit/compare/v5.3.1...v5.4.0) (2022-04-19)


### Features

* ENG-4019 Gracefully reconnect to rabbit ([#861](https://github.com/pagerinc/jackrabbit/issues/861)) ([62d025c](https://github.com/pagerinc/jackrabbit/commit/62d025ccf05e08d1d512aa87920a4266f69a0916))

## [5.3.1](https://github.com/pagerinc/jackrabbit/compare/v5.3.0...v5.3.1) (2021-05-28)


### Bug Fixes

* handle undefined message [UE-2640] ([#736](https://github.com/pagerinc/jackrabbit/issues/736)) ([d6ce41d](https://github.com/pagerinc/jackrabbit/commit/d6ce41d4f80ef9c27418c02eb1b6ea9e01bbec6a))

# [5.3.0](https://github.com/pagerinc/jackrabbit/compare/v5.2.5...v5.3.0) (2021-03-18)


### Features

* add isConnectionReady function [UE-2535] ([#656](https://github.com/pagerinc/jackrabbit/issues/656)) ([512b953](https://github.com/pagerinc/jackrabbit/commit/512b95374eb26fdc046cdfe256c7680f4dd09966))

## [5.2.5](https://github.com/pagerinc/jackrabbit/compare/v5.2.4...v5.2.5) (2021-03-16)


### Bug Fixes

* **deps:** update dependency amqplib to 0.7.x ([#623](https://github.com/pagerinc/jackrabbit/issues/623)) ([8054c56](https://github.com/pagerinc/jackrabbit/commit/8054c5651ae546f6b4d6310d53944c25c97d4e35))

## [5.2.4](https://github.com/pagerinc/jackrabbit/compare/v5.2.3...v5.2.4) (2020-11-18)


### Bug Fixes

* avoid creating to many EE listeners [CS-2836] ([#485](https://github.com/pagerinc/jackrabbit/issues/485)) ([c41d3ea](https://github.com/pagerinc/jackrabbit/commit/c41d3ea0632c1731edf2cd2dc81237491955bb5e))

## [5.2.3](https://github.com/pagerinc/jackrabbit/compare/v5.2.2...v5.2.3) (2020-08-04)


### Bug Fixes

* **deps:** update dependency amqplib to 0.6.x ([#317](https://github.com/pagerinc/jackrabbit/issues/317)) ([b9024f9](https://github.com/pagerinc/jackrabbit/commit/b9024f9792cd0f4bed1b510f52b2f7e6b447477f))

## [5.2.2](https://github.com/pagerinc/jackrabbit/compare/v5.2.1...v5.2.2) (2020-08-04)


### Bug Fixes

* **deps:** update dependency uuid to v8 ([#300](https://github.com/pagerinc/jackrabbit/issues/300)) ([243ddf5](https://github.com/pagerinc/jackrabbit/commit/243ddf5f3a30853df9e29171de7ad27c78054afe))

## [5.2.1](https://github.com/pagerinc/jackrabbit/compare/v5.2.0...v5.2.1) (2020-07-20)


### Bug Fixes

* return publish result ([#320](https://github.com/pagerinc/jackrabbit/issues/320)) ([e6166ec](https://github.com/pagerinc/jackrabbit/commit/e6166ec2a906c658a5725dcf8dc48d355c1a7a61))

# [5.2.0](https://github.com/pagerinc/jackrabbit/compare/v5.1.0...v5.2.0) (2020-07-20)


### Features

* handle backpressure with streams ([#319](https://github.com/pagerinc/jackrabbit/issues/319)) ([016666c](https://github.com/pagerinc/jackrabbit/commit/016666cd07a6acdf8b0be8c18be2bbe2bd283126))

# [5.1.0](https://github.com/pagerinc/jackrabbit/compare/v5.0.10...v5.1.0) (2020-07-17)


### Features

* handle backpressure with publishSafe [PSS-330] ([#318](https://github.com/pagerinc/jackrabbit/issues/318)) ([c2bd6ee](https://github.com/pagerinc/jackrabbit/commit/c2bd6ee29adb79ed30254b0c953966b75020af75))

## [5.0.10](https://github.com/pagerinc/jackrabbit/compare/v5.0.9...v5.0.10) (2020-04-30)


### Bug Fixes

* verify if properties is null in msg ([#301](https://github.com/pagerinc/jackrabbit/issues/301)) ([5e8913c](https://github.com/pagerinc/jackrabbit/commit/5e8913c9b989b3fc32f6bb8202aa772d5d871493))

## [5.0.9](https://github.com/pagerinc/jackrabbit/compare/v5.0.8...v5.0.9) (2020-04-22)

## [5.0.8](https://github.com/pagerinc/jackrabbit/compare/v5.0.7...v5.0.8) (2020-03-09)

## [5.0.7](https://github.com/pagerinc/jackrabbit/compare/v5.0.6...v5.0.7) (2020-03-09)

## [5.0.6](https://github.com/pagerinc/jackrabbit/compare/v5.0.5...v5.0.6) (2020-03-08)

## [5.0.5](https://github.com/pagerinc/jackrabbit/compare/v5.0.4...v5.0.5) (2020-03-08)

## [5.0.4](https://github.com/pagerinc/jackrabbit/compare/v5.0.3...v5.0.4) (2020-03-07)

## [5.0.3](https://github.com/pagerinc/jackrabbit/compare/v5.0.2...v5.0.3) (2020-03-06)

## [5.0.2](https://github.com/pagerinc/jackrabbit/compare/v5.0.1...v5.0.2) (2020-03-05)


### Bug Fixes

* **github:** add semantic-release cache support [UE-908] ([#251](https://github.com/pagerinc/jackrabbit/issues/251)) ([8048285](https://github.com/pagerinc/jackrabbit/commit/8048285a1e3769382d19570a6f3e449cdecf392f))

## [5.0.1](https://github.com/pagerinc/jackrabbit/compare/v5.0.0...v5.0.1) (2020-03-05)
