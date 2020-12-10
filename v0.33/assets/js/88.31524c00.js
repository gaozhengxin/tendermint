(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{772:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-018-abci-validator-improvements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-018-abci-validator-improvements"}},[e._v("#")]),e._v(" ADR 018: ABCI Validator Improvements")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("p",[e._v("016-08-2018: Follow up from review: - Revert changes to commit round - Remind about justification for removing pubkey - Update pros/cons\n05-08-2018: Initial draft")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("ADR 009 introduced major improvements to the ABCI around validators and the use\nof Amino. Here we follow up with some additional changes to improve the naming\nand expected use of Validator messages.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("h3",{attrs:{id:"validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator"}},[e._v("#")]),e._v(" Validator")]),e._v(" "),a("p",[e._v("Currently a Validator contains "),a("code",[e._v("address")]),e._v(" and "),a("code",[e._v("pub_key")]),e._v(", and one or the other is\noptional/not-sent depending on the use case. Instead, we should have a\n"),a("code",[e._v("Validator")]),e._v(" (with just the address, used for RequestBeginBlock)\nand a "),a("code",[e._v("ValidatorUpdate")]),e._v(" (with the pubkey, used for ResponseEndBlock):")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWVzc2FnZSBWYWxpZGF0b3IgewogICAgYnl0ZXMgYWRkcmVzcwogICAgaW50NjQgcG93ZXIKfQoKbWVzc2FnZSBWYWxpZGF0b3JVcGRhdGUgewogICAgUHViS2V5IHB1Yl9rZXkKICAgIGludDY0IHBvd2VyCn0K"}}),e._v(" "),a("p",[e._v("As noted in "),a("RouterLink",{attrs:{to:"/architecture/adr-009-ABCI-design.html"}},[e._v("ADR-009")]),e._v(",\nthe "),a("code",[e._v("Validator")]),e._v(" does not contain a pubkey because quantum public keys are\nquite large and it would be wasteful to send them all over ABCI with every block.\nThus, applications that want to take advantage of the information in BeginBlock\nare "),a("em",[e._v("required")]),e._v(" to store pubkeys in state (or use much less efficient lazy means\nof verifying BeginBlock data).")],1),e._v(" "),a("h3",{attrs:{id:"requestbeginblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestbeginblock"}},[e._v("#")]),e._v(" RequestBeginBlock")]),e._v(" "),a("p",[e._v("LastCommitInfo currently has an array of "),a("code",[e._v("SigningValidator")]),e._v(" that contains\ninformation for each validator in the entire validator set.\nInstead, this should be called "),a("code",[e._v("VoteInfo")]),e._v(", since it is information about the\nvalidator votes.")]),e._v(" "),a("p",[e._v("Note that all votes in a commit must be from the same round.")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWVzc2FnZSBMYXN0Q29tbWl0SW5mbyB7CiAgaW50NjQgcm91bmQKICByZXBlYXRlZCBWb3RlSW5mbyBjb21taXRfdm90ZXMKfQoKbWVzc2FnZSBWb3RlSW5mbyB7CiAgICBWYWxpZGF0b3IgdmFsaWRhdG9yCiAgICBib29sIHNpZ25lZF9sYXN0X2Jsb2NrCn0K"}}),e._v(" "),a("h3",{attrs:{id:"responseendblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#responseendblock"}},[e._v("#")]),e._v(" ResponseEndBlock")]),e._v(" "),a("p",[e._v("Use ValidatorUpdates instead of Validators. Then it's clear we don't need an\naddress, and we do need a pubkey.")]),e._v(" "),a("p",[e._v("We could require the address here as well as a sanity check, but it doesn't seem\nnecessary.")]),e._v(" "),a("h3",{attrs:{id:"initchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initchain"}},[e._v("#")]),e._v(" InitChain")]),e._v(" "),a("p",[e._v("Use ValidatorUpdates for both Request and Response. InitChain\nis about setting/updating the initial validator set, unlike BeginBlock\nwhich is just informational.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Proposal.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Clarifies the distinction between the different uses of validator information")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("Apps must still store the public keys in state to utilize the RequestBeginBlock info")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[e._v("ResponseEndBlock does not require an address")])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.22.8/docs/app-dev/abci-spec.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Latest ABCI Spec"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.22.8/docs/architecture/adr-009-ABCI-design.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR-009"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1712",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #1712 - Don't send PubKey in\nRequestBeginBlock"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);