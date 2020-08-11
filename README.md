# KAFKA LAB

## Prerequisites

Node.js 8.X LTS
[node-gyp](https://www.npmjs.com/package/node-gyp)
Node-rdkafka will build librdkafka automatically. You must ensure you have the dependencies listed below installed. For more details, see librdakfka's instructions.

Linux

- openssl-dev
- libsasl2-dev
- libsasl2-modules
- C++ toolchain

macOS

- Brew
- Apple Xcode command line tools
- openssl via Brew

## DOCS

https://github.com/ibm-messaging/event-streams-samples/blob/master/kafka-nodejs-console-sample/docs/Local.md

## NODEJS GIT

https://github.com/ibm-messaging/event-streams-samples/tree/master/kafka-nodejs-console-sample

## Lab Steps

```bash
git clone git@github.com:msalimbe1/event-stream-lab.git
```

```bash
cd event-stream-lab
```

```bash
npm i
```

> If `npm i` fails on Mac reinstall developer tools with the following two lines

```bash
sudo rm -r -f /Library/Developer/CommandLineTools
xcode-select --install
```

- From the service credentials extract `kafka_brokers_sasl`, `api_key` and `ca_location` and use them to create enviromental variables.

```bash
export CPPFLAGS=-I/usr/local/opt/openssl/include
export LDFLAGS=-L/usr/local/opt/openssl/lib
export kafka_brokers_sasl="broker-3-n9lxwtrxg5fh08fr.kafka.svc05.us-south.eventstreams.cloud.ibm.com:9093","broker-1-n9lxwtrxg5fh08fr.kafka.svc05.us-south.eventstreams.cloud.ibm.com:9093","broker-0-n9lxwtrxg5fh08fr.kafka.svc05.us-south.eventstreams.cloud.ibm.com:9093","broker-5-n9lxwtrxg5fh08fr.kafka.svc05.us-south.eventstreams.cloud.ibm.com:9093","broker-4-n9lxwtrxg5fh08fr.kafka.svc05.us-south.eventstreams.cloud.ibm.com:9093","broker-2-n9lxwtrxg5fh08fr.kafka.svc05.us-south.eventstreams.cloud.ibm.com:9093"
export api_key=
export ca_location=/usr/local/etc/openssl/cert.pem
```

**Note**
`ca_location` is the path where the trusted SSL certificates are stored on your machine and is therefore system dependent. For example:

> `Ubuntu`: /etc/ssl/certs  
> `RedHat`: /etc/pki/tls/cert.pem  
> `macOS`: /usr/local/etc/openssl/cert.pem from openssl installed by brew

- From a terminal execute app in `producer` mode

```bash
node app.js $kafka_brokers_sasl $api_key $ca_location -producer
```

- From another terminal execute app in `consumer` mode

```bash
node app.js $kafka_brokers_sasl $api_key $ca_location -consumer
```

# event-streams-samples

IBM Event Streams for IBM Cloud is a scalable, distributed, high throughput message bus to unite your on-premise and off-premise cloud technologies. You can wire micro-services together using open protocols, connect stream data to analytics to realize powerful insight and feed event data to multiple applications to react in real time.

This repository is for samples which interact with the Event Streams for IBM Cloud service.
Currently, there are samples for the Kafka and MQ Light APIs.
Information and instructions regarding the use of these samples can be found in their respective directories.

## Aim of the Samples

The aim of the samples is to help you get started with Event Streams for IBM Cloud within minutes. They are not production-ready applications but should give you useful pointers at how to build, package and deploy applications as well as how to make basic API calls against us with error handling. We did all the heavy lifting so you can focus on developing exciting code with value!

## Provisioning your Event Streams for IBM Cloud Cluster

In order to provision an Event Streams for IBM Cloud cluster, please visit the [IBM Cloud® catalog](https://cloud.ibm.com/catalog/). Please also familiarise yourself with Event Streams for IBM Cloud and Apache Kafka basics and terminology. [Our documentation](https://cloud.ibm.com/docs/services/EventStreams?topic=eventstreams-getting_started) is a good starting point.

### Pricing plans

IBM Event Streams can be provisioned on IBM Cloud® in various pricing plans. Please refer to our [documentation](https://cloud.ibm.com/docs/services/EventStreams?topic=eventstreams-plan_choose#plan_choose) to help choose a plan that works for you.

**Important Note**: Provisioning an Event Streams service in IBM Cloud® incurs a fee. Please review pricing before provisioning. The samples in this repository will create topic(s) on your behalf - creating a topic might also incur a fee. For more information, please consult the IBM Cloud® documentation if necessary.

## Connecting to your Event Streams for IBM Cloud Cluster

In each sample, we demonstrate a single connection path for our Standard/Enterprise plans respectively. The aim was to get you started quickly. However your client's needs might be different. Therefore we wrote a [guide](https://cloud.ibm.com/docs/services/EventStreams?topic=eventstreams-connecting#connecting) that discusses credential generation in detail and showing you all possible ways of doing this.

## Our APIs and Sample Applications

### Kafka API (recommended):

- [kafka-java-console-sample](/kafka-java-console-sample/README.md) : Sample Java console application using the Event Streams for IBM Cloud Kafka API
- [kafka-java-liberty-sample](/kafka-java-liberty-sample/README.md) : Sample IBM Websphere Liberty profile application using the Event Streams for IBM Cloud Kafka API
- [kafka-nodejs-console-sample](kafka-nodejs-console-sample/README.md) : Sample Node.js console application using the Event Streams for IBM Cloud Kafka API
- [kafka-python-console-sample](/kafka-python-console-sample/README.md) : Sample Python console application using the Event Streams for IBM Cloud Kafka API
- [kafka-connect](/kafka-connect/README.md) : Sample Docker image with Kafka Connect
- [kafka-mirrormaker](/kafka-mirrormaker/README.md) : Sample Docker image with Kafka Mirror Maker

### Spring Kafka:

- [spring kafka tutorial](https://developer.ibm.com/tutorials/use-spring-kafka-to-access-an-event-streams-service/) : Tutorial to quickly get you up and running using IBM Event Streams.
- [spring-kafka](https://github.com/wkorando/event-stream-kafka) : Sample app to connect to Event Streams using Spring Kafka

## Get Further Assistance

If you have any issues, just ask us a question (tagged with `ibm-eventstreams`) on [StackOverflow.com](http://stackoverflow.com/questions/tagged/ibm-eventstreams).

For more information regarding IBM Event Streams for IBM Cloud, [view the documentation on IBM Cloud](https://cloud.ibm.com/docs/services/EventStreams?topic=eventstreams-getting_started).

```

```
