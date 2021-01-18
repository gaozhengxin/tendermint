(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{783:function(e,t,a){"use strict";a.r(t);var n=a(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-058-event-hashing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-058-event-hashing"}},[e._v("#")]),e._v(" ADR 058: Event hashing")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2020-07-17: initial version")]),e._v(" "),a("li",[e._v("2020-07-27: fixes after Ismail and Ethan's comments")]),e._v(" "),a("li",[e._v("2020-07-27: declined")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Before "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/4845",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR#4845"),a("OutboundLink")],1),e._v(",\n"),a("code",[e._v("Header#LastResultsHash")]),e._v(" was a root of the Merkle tree built from "),a("code",[e._v("DeliverTx")]),e._v("\nresults. Only "),a("code",[e._v("Code")]),e._v(", "),a("code",[e._v("Data")]),e._v(" fields were included because "),a("code",[e._v("Info")]),e._v(" and "),a("code",[e._v("Log")]),e._v("\nfields are non-deterministic.")]),e._v(" "),a("p",[e._v("At some point, we've added events to "),a("code",[e._v("ResponseBeginBlock")]),e._v(", "),a("code",[e._v("ResponseEndBlock")]),e._v(",\nand "),a("code",[e._v("ResponseDeliverTx")]),e._v(" to give applications a way to attach some additional\ninformation to blocks / transactions.")]),e._v(" "),a("p",[e._v("Many applications seem to have started using them since.")]),e._v(" "),a("p",[e._v("However, before "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/4845",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR#4845"),a("OutboundLink")],1),e._v("\nthere was no way to prove that certain events were a part of the result\n("),a("em",[e._v("unless the application developer includes them into the state tree")]),e._v(").")]),e._v(" "),a("p",[e._v("Hence, "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/4845",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR#4845"),a("OutboundLink")],1),e._v(" was\nopened. In it, "),a("code",[e._v("GasWanted")]),e._v(" along with "),a("code",[e._v("GasUsed")]),e._v(" are included when hashing\n"),a("code",[e._v("DeliverTx")]),e._v(" results. Also, events from "),a("code",[e._v("BeginBlock")]),e._v(", "),a("code",[e._v("EndBlock")]),e._v(" and "),a("code",[e._v("DeliverTx")]),e._v("\nresults are hashed into the "),a("code",[e._v("LastResultsHash")]),e._v(" as follows:")]),e._v(" "),a("ul",[a("li",[e._v("Since we do not expect "),a("code",[e._v("BeginBlock")]),e._v(" and "),a("code",[e._v("EndBlock")]),e._v(" to contain many events,\nthese will be Protobuf encoded and included in the Merkle tree as leaves.")]),e._v(" "),a("li",[a("code",[e._v("LastResultsHash")]),e._v(" therefore is the root hash of a Merkle tree w/ 3 leafs:\nproto-encoded "),a("code",[e._v("ResponseBeginBlock#Events")]),e._v(", root hash of a Merkle tree build\nfrom "),a("code",[e._v("ResponseDeliverTx")]),e._v(" responses (Log, Info and Codespace fields are\nignored), and proto-encoded "),a("code",[e._v("ResponseEndBlock#Events")]),e._v(".")]),e._v(" "),a("li",[e._v("Order of events is unchanged - same as received from the ABCI application.")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tendermint/spec/pull/97/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spec PR"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("While it's certainly good to be able to prove something, introducing new events\nor removing such becomes difficult because it breaks the "),a("code",[e._v("LastResultsHash")]),e._v(". It\nmeans that every time you add, remove or update an event, you'll need a\nhard-fork. And that is undoubtedly bad for applications, which are evolving and\ndon't have a stable events set.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("As a middle ground approach, the proposal is to add the\n"),a("code",[e._v("Block#LastResultsEvents")]),e._v(" consensus parameter that is a list of all events that\nare to be hashed in the header.")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"QCBwcm90by90ZW5kZXJtaW50L2FiY2kvdHlwZXMucHJvdG86Mjk1IEAgbWVzc2FnZSBCbG9ja1BhcmFtcyB7CiAgaW50NjQgbWF4X2J5dGVzID0gMTsKICAvLyBOb3RlOiBtdXN0IGJlIGdyZWF0ZXIgb3IgZXF1YWwgdG8gLTEKICBpbnQ2NCBtYXhfZ2FzID0gMjsKICAvLyBMaXN0IG9mIGV2ZW50cywgd2hpY2ggd2lsbCBiZSBoYXNoZWQgaW50byB0aGUgTGFzdFJlc3VsdHNIYXNoCiAgcmVwZWF0ZWQgc3RyaW5nIGxhc3RfcmVzdWx0c19ldmVudHMgPSAzOwp9Cg=="}}),e._v(" "),a("p",[e._v("Initially the list is empty. The ABCI application can change it via "),a("code",[e._v("InitChain")]),e._v("\nor "),a("code",[e._v("EndBlock")]),e._v(".")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpNeUFwcCkgRGVsaXZlclR4KHJlcSB0eXBlcy5SZXF1ZXN0RGVsaXZlclR4KSB0eXBlcy5SZXNwb25zZURlbGl2ZXJUeCB7CiAgICAvLy4uLgogICAgZXZlbnRzIDo9IFtdYWJjaS5FdmVudHsKICAgICAgICB7CiAgICAgICAgICAgIFR5cGU6ICZxdW90O3RyYW5zZmVyJnF1b3Q7LAogICAgICAgICAgICBBdHRyaWJ1dGVzOiBbXWFiY2kuRXZlbnRBdHRyaWJ1dGV7CiAgICAgICAgICAgICAgICB7S2V5OiBbXWJ5dGUoJnF1b3Q7c2VuZGVyJnF1b3Q7KSwgVmFsdWU6IFtdYnl0ZSgmcXVvdDtCb2ImcXVvdDspLCBJbmRleDogdHJ1ZX0sCiAgICAgICAgICAgIH0sCiAgICAgICAgfSwKICAgIH0KICAgIHJldHVybiB0eXBlcy5SZXNwb25zZURlbGl2ZXJUeHtDb2RlOiBjb2RlLkNvZGVUeXBlT0ssIEV2ZW50czogZXZlbnRzfQp9Cg=="}}),e._v(" "),a("p",[e._v('For "transfer" event to be hashed, the '),a("code",[e._v("LastResultsEvents")]),e._v(' must contain a\nstring "transfer".')]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Declined")]),e._v(" "),a("p",[a("strong",[e._v("Until there's more stability/motivation/use-cases/demand, the decision is to\npush this entirely application side and just have apps which want events to be\nprovable to insert them into their application-side merkle trees. Of course\nthis puts more pressure on their application state and makes event proving\napplication specific, but it might help built up a better sense of use-cases\nand how this ought to ultimately be done by Tendermint.")])]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ol",[a("li",[e._v("networks can perform parameter change proposals to update this list as new events are added")]),e._v(" "),a("li",[e._v("allows networks to avoid having to do hard-forks")]),e._v(" "),a("li",[e._v("events can still be added at-will to the application w/o breaking anything")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ol",[a("li",[e._v("yet another consensus parameter")]),e._v(" "),a("li",[e._v("more things to track in the tendermint state")])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/architecture/adr-021-abci-events.html"}},[e._v("ADR 021")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/app-dev/indexing-transactions.html"}},[e._v("Indexing transactions")])],1)]),e._v(" "),a("h2",{attrs:{id:"appendix-a-alternative-proposals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a-alternative-proposals"}},[e._v("#")]),e._v(" Appendix A. Alternative proposals")]),e._v(" "),a("p",[e._v("The other proposal was to add "),a("code",[e._v("Hash bool")]),e._v(" flag to the "),a("code",[e._v("Event")]),e._v(", similarly to\n"),a("code",[e._v("Index bool")]),e._v(" EventAttribute's field. When "),a("code",[e._v("true")]),e._v(", Tendermint would hash it into\nthe "),a("code",[e._v("LastResultsEvents")]),e._v(". The downside is that the logic is implicit and depends\nlargely on the node's operator, who decides what application code to run. The\nabove proposal makes it (the logic) explicit and easy to upgrade via\ngovernance.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);