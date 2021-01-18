(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{675:function(e,g,t){"use strict";t.r(g);var a=t(1),s=Object(a.a)({},(function(){var e=this,g=e.$createElement,t=e._self._c||g;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"consensus-reactor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consensus-reactor"}},[e._v("#")]),e._v(" Consensus Reactor")]),e._v(" "),t("p",[e._v("Consensus Reactor defines a reactor for the consensus service. It contains the ConsensusState service that\nmanages the state of the Tendermint consensus internal state machine.\nWhen Consensus Reactor is started, it starts Broadcast Routine which starts ConsensusState service.\nFurthermore, for each peer that is added to the Consensus Reactor, it creates (and manages) the known peer state\n(that is used extensively in gossip routines) and starts the following three routines for the peer p:\nGossip Data Routine, Gossip Votes Routine and QueryMaj23Routine. Finally, Consensus Reactor is responsible\nfor decoding messages received from a peer and for adequate processing of the message depending on its type and content.\nThe processing normally consists of updating the known peer state and for some messages\n("),t("code",[e._v("ProposalMessage")]),e._v(", "),t("code",[e._v("BlockPartMessage")]),e._v(" and "),t("code",[e._v("VoteMessage")]),e._v(") also forwarding message to ConsensusState module\nfor further processing. In the following text we specify the core functionality of those separate unit of executions\nthat are part of the Consensus Reactor.")]),e._v(" "),t("h2",{attrs:{id:"consensusstate-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consensusstate-service"}},[e._v("#")]),e._v(" ConsensusState service")]),e._v(" "),t("p",[e._v("Consensus State handles execution of the Tendermint BFT consensus algorithm. It processes votes and proposals,\nand upon reaching agreement, commits blocks to the chain and executes them against the application.\nThe internal state machine receives input from peers, the internal validator and from a timer.")]),e._v(" "),t("p",[e._v("Inside Consensus State we have the following units of execution: Timeout Ticker and Receive Routine.\nTimeout Ticker is a timer that schedules timeouts conditional on the height/round/step that are processed\nby the Receive Routine.")]),e._v(" "),t("h3",{attrs:{id:"receive-routine-of-the-consensusstate-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receive-routine-of-the-consensusstate-service"}},[e._v("#")]),e._v(" Receive Routine of the ConsensusState service")]),e._v(" "),t("p",[e._v("Receive Routine of the ConsensusState handles messages which may cause internal consensus state transitions.\nIt is the only routine that updates RoundState that contains internal consensus state.\nUpdates (state transitions) happen on timeouts, complete proposals, and 2/3 majorities.\nIt receives messages from peers, internal validators and from Timeout Ticker\nand invokes the corresponding handlers, potentially updating the RoundState.\nThe details of the protocol (together with formal proofs of correctness) implemented by the Receive Routine are\ndiscussed in separate document. For understanding of this document\nit is sufficient to understand that the Receive Routine manages and updates RoundState data structure that is\nthen extensively used by the gossip routines to determine what information should be sent to peer processes.")]),e._v(" "),t("h2",{attrs:{id:"round-state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#round-state"}},[e._v("#")]),e._v(" Round State")]),e._v(" "),t("p",[e._v("RoundState defines the internal consensus state. It contains height, round, round step, a current validator set,\na proposal and proposal block for the current round, locked round and block (if some block is being locked), set of\nreceived votes and last commit and last validators set.")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBSb3VuZFN0YXRlIHN0cnVjdCB7CiBIZWlnaHQgICAgICAgICAgICAgaW50NjQKIFJvdW5kICAgICAgICAgICAgICBpbnQKIFN0ZXAgICAgICAgICAgICAgICBSb3VuZFN0ZXBUeXBlCiBWYWxpZGF0b3JzICAgICAgICAgVmFsaWRhdG9yU2V0CiBQcm9wb3NhbCAgICAgICAgICAgUHJvcG9zYWwKIFByb3Bvc2FsQmxvY2sgICAgICBCbG9jawogUHJvcG9zYWxCbG9ja1BhcnRzIFBhcnRTZXQKIExvY2tlZFJvdW5kICAgICAgICBpbnQKIExvY2tlZEJsb2NrICAgICAgICBCbG9jawogTG9ja2VkQmxvY2tQYXJ0cyAgIFBhcnRTZXQKIFZvdGVzICAgICAgICAgICAgICBIZWlnaHRWb3RlU2V0CiBMYXN0Q29tbWl0ICAgICAgICAgVm90ZVNldAogTGFzdFZhbGlkYXRvcnMgICAgIFZhbGlkYXRvclNldAp9Cg=="}}),e._v(" "),t("p",[e._v("Internally, consensus will run as a state machine with the following states:")]),e._v(" "),t("ul",[t("li",[e._v("RoundStepNewHeight")]),e._v(" "),t("li",[e._v("RoundStepNewRound")]),e._v(" "),t("li",[e._v("RoundStepPropose")]),e._v(" "),t("li",[e._v("RoundStepProposeWait")]),e._v(" "),t("li",[e._v("RoundStepPrevote")]),e._v(" "),t("li",[e._v("RoundStepPrevoteWait")]),e._v(" "),t("li",[e._v("RoundStepPrecommit")]),e._v(" "),t("li",[e._v("RoundStepPrecommitWait")]),e._v(" "),t("li",[e._v("RoundStepCommit")])]),e._v(" "),t("h2",{attrs:{id:"peer-round-state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#peer-round-state"}},[e._v("#")]),e._v(" Peer Round State")]),e._v(" "),t("p",[e._v("Peer round state contains the known state of a peer. It is being updated by the Receive routine of\nConsensus Reactor and by the gossip routines upon sending a message to the peer.")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBQZWVyUm91bmRTdGF0ZSBzdHJ1Y3QgewogSGVpZ2h0ICAgICAgICAgICAgICAgICAgIGludDY0ICAgICAgICAgICAgICAgLy8gSGVpZ2h0IHBlZXIgaXMgYXQKIFJvdW5kICAgICAgICAgICAgICAgICAgICBpbnQgICAgICAgICAgICAgICAgIC8vIFJvdW5kIHBlZXIgaXMgYXQsIC0xIGlmIHVua25vd24uCiBTdGVwICAgICAgICAgICAgICAgICAgICAgUm91bmRTdGVwVHlwZSAgICAgICAvLyBTdGVwIHBlZXIgaXMgYXQKIFByb3Bvc2FsICAgICAgICAgICAgICAgICBib29sICAgICAgICAgICAgICAgIC8vIFRydWUgaWYgcGVlciBoYXMgcHJvcG9zYWwgZm9yIHRoaXMgcm91bmQKIFByb3Bvc2FsQmxvY2tQYXJ0c0hlYWRlciBQYXJ0U2V0SGVhZGVyCiBQcm9wb3NhbEJsb2NrUGFydHMgICAgICAgQml0QXJyYXkKIFByb3Bvc2FsUE9MUm91bmQgICAgICAgICBpbnQgICAgICAgICAgICAgICAgIC8vIFByb3Bvc2FsJ3MgUE9MIHJvdW5kLiAtMSBpZiBub25lLgogUHJvcG9zYWxQT0wgICAgICAgICAgICAgIEJpdEFycmF5ICAgICAgICAgICAgLy8gbmlsIHVudGlsIFByb3Bvc2FsUE9MTWVzc2FnZSByZWNlaXZlZC4KIFByZXZvdGVzICAgICAgICAgICAgICAgICBCaXRBcnJheSAgICAgICAgICAgIC8vIEFsbCB2b3RlcyBwZWVyIGhhcyBmb3IgdGhpcyByb3VuZAogUHJlY29tbWl0cyAgICAgICAgICAgICAgIEJpdEFycmF5ICAgICAgICAgICAgLy8gQWxsIHByZWNvbW1pdHMgcGVlciBoYXMgZm9yIHRoaXMgcm91bmQKIExhc3RDb21taXRSb3VuZCAgICAgICAgICBpbnQgICAgICAgICAgICAgICAgIC8vIFJvdW5kIG9mIGNvbW1pdCBmb3IgbGFzdCBoZWlnaHQuIC0xIGlmIG5vbmUuCiBMYXN0Q29tbWl0ICAgICAgICAgICAgICAgQml0QXJyYXkgICAgICAgICAgICAvLyBBbGwgY29tbWl0IHByZWNvbW1pdHMgb2YgY29tbWl0IGZvciBsYXN0IGhlaWdodC4KIENhdGNodXBDb21taXRSb3VuZCAgICAgICBpbnQgICAgICAgICAgICAgICAgIC8vIFJvdW5kIHRoYXQgd2UgaGF2ZSBjb21taXQgZm9yLiBOb3QgbmVjZXNzYXJpbHkgdW5pcXVlLiAtMSBpZiBub25lLgogQ2F0Y2h1cENvbW1pdCAgICAgICAgICAgIEJpdEFycmF5ICAgICAgICAgICAgLy8gQWxsIGNvbW1pdCBwcmVjb21taXRzIHBlZXIgaGFzIGZvciB0aGlzIGhlaWdodCAmYW1wOyBDYXRjaHVwQ29tbWl0Um91bmQKfQo="}}),e._v(" "),t("h2",{attrs:{id:"receive-method-of-consensus-reactor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receive-method-of-consensus-reactor"}},[e._v("#")]),e._v(" Receive method of Consensus reactor")]),e._v(" "),t("p",[e._v("The entry point of the Consensus reactor is a receive method. When a message is\nreceived from a peer p, normally the peer round state is updated\ncorrespondingly, and some messages are passed for further processing, for\nexample to ConsensusState service. We now specify the processing of messages in\nthe receive method of Consensus reactor for each message type. In the following\nmessage handler, "),t("code",[e._v("rs")]),e._v(" and "),t("code",[e._v("prs")]),e._v(" denote "),t("code",[e._v("RoundState")]),e._v(" and "),t("code",[e._v("PeerRoundState")]),e._v(",\nrespectively.")]),e._v(" "),t("h3",{attrs:{id:"newroundstepmessage-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#newroundstepmessage-handler"}},[e._v("#")]),e._v(" NewRoundStepMessage handler")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aGFuZGxlTWVzc2FnZShtc2cpOgogICAgaWYgbXNnIGlzIGZyb20gc21hbGxlciBoZWlnaHQvcm91bmQvc3RlcCB0aGVuIHJldHVybgogICAgLy8gSnVzdCByZW1lbWJlciB0aGVzZSB2YWx1ZXMuCiAgICBwcnNIZWlnaHQgPSBwcnMuSGVpZ2h0CiAgICBwcnNSb3VuZCA9IHBycy5Sb3VuZAogICAgcHJzQ2F0Y2h1cENvbW1pdFJvdW5kID0gcHJzLkNhdGNodXBDb21taXRSb3VuZAogICAgcHJzQ2F0Y2h1cENvbW1pdCA9IHBycy5DYXRjaHVwQ29tbWl0CgogICAgVXBkYXRlIHBycyB3aXRoIHZhbHVlcyBmcm9tIG1zZwogICAgaWYgcHJzLkhlaWdodCBvciBwcnMuUm91bmQgaGFzIGJlZW4gdXBkYXRlZCB0aGVuCiAgICAgICAgcmVzZXQgUHJvcG9zYWwgcmVsYXRlZCBmaWVsZHMgb2YgdGhlIHBlZXIgc3RhdGUKICAgIGlmIHBycy5Sb3VuZCBoYXMgYmVlbiB1cGRhdGVkIGFuZCBtc2cuUm91bmQgPT0gcHJzQ2F0Y2h1cENvbW1pdFJvdW5kIHRoZW4KICAgICAgICBwcnMuUHJlY29tbWl0cyA9IHBzQ2F0Y2h1cENvbW1pdAogICAgaWYgcHJzLkhlaWdodCBoYXMgYmVlbiB1cGRhdGVkIHRoZW4KICAgICAgICBpZiBwcnNIZWlnaHQrMSA9PSBtc2cuSGVpZ2h0ICZhbXA7JmFtcDsgcHJzUm91bmQgPT0gbXNnLkxhc3RDb21taXRSb3VuZCB0aGVuCiAgICAgICAgICAgIHBycy5MYXN0Q29tbWl0Um91bmQgPSBtc2cuTGFzdENvbW1pdFJvdW5kCiAgICAgICAgIHBycy5MYXN0Q29tbWl0ID0gcHJzLlByZWNvbW1pdHMKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBwcnMuTGFzdENvbW1pdFJvdW5kID0gbXNnLkxhc3RDb21taXRSb3VuZAogICAgICAgICBwcnMuTGFzdENvbW1pdCA9IG5pbAogICAgICAgIH0KICAgICAgICBSZXNldCBwcnMuQ2F0Y2h1cENvbW1pdFJvdW5kIGFuZCBwcnMuQ2F0Y2h1cENvbW1pdAo="}}),e._v(" "),t("h3",{attrs:{id:"newvalidblockmessage-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#newvalidblockmessage-handler"}},[e._v("#")]),e._v(" NewValidBlockMessage handler")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aGFuZGxlTWVzc2FnZShtc2cpOgogICAgaWYgcHJzLkhlaWdodCAhPSBtc2cuSGVpZ2h0IHRoZW4gcmV0dXJuCgogICAgaWYgcHJzLlJvdW5kICE9IG1zZy5Sb3VuZCAmYW1wOyZhbXA7ICFtc2cuSXNDb21taXQgdGhlbiByZXR1cm4KCiAgICBwcnMuUHJvcG9zYWxCbG9ja1BhcnRzSGVhZGVyID0gbXNnLkJsb2NrUGFydHNIZWFkZXIKICAgIHBycy5Qcm9wb3NhbEJsb2NrUGFydHMgPSBtc2cuQmxvY2tQYXJ0cwo="}}),e._v(" "),t("p",[e._v("The number of block parts is limited to 1601 ("),t("code",[e._v("types.MaxBlockPartsCount")]),e._v(") to\nprotect the node against DOS attacks.")]),e._v(" "),t("h3",{attrs:{id:"hasvotemessage-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hasvotemessage-handler"}},[e._v("#")]),e._v(" HasVoteMessage handler")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aGFuZGxlTWVzc2FnZShtc2cpOgogICAgaWYgcHJzLkhlaWdodCA9PSBtc2cuSGVpZ2h0IHRoZW4KICAgICAgICBwcnMuc2V0SGFzVm90ZShtc2cuSGVpZ2h0LCBtc2cuUm91bmQsIG1zZy5UeXBlLCBtc2cuSW5kZXgpCg=="}}),e._v(" "),t("h3",{attrs:{id:"votesetmaj23message-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#votesetmaj23message-handler"}},[e._v("#")]),e._v(" VoteSetMaj23Message handler")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aGFuZGxlTWVzc2FnZShtc2cpOgogICAgaWYgcHJzLkhlaWdodCA9PSBtc2cuSGVpZ2h0IHRoZW4KICAgICAgICBSZWNvcmQgaW4gcnMgdGhhdCBhIHBlZXIgY2xhaW0gdG8gaGF2ZSDihZQgbWFqb3JpdHkgZm9yIG1zZy5CbG9ja0lECiAgICAgICAgU2VuZCBWb3RlU2V0Qml0c01lc3NhZ2Ugc2hvd2luZyB2b3RlcyBub2RlIGhhcyBmb3IgdGhhdCBCbG9ja0lkCg=="}}),e._v(" "),t("h3",{attrs:{id:"proposalmessage-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposalmessage-handler"}},[e._v("#")]),e._v(" ProposalMessage handler")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aGFuZGxlTWVzc2FnZShtc2cpOgogICAgaWYgcHJzLkhlaWdodCAhPSBtc2cuSGVpZ2h0IHx8IHBycy5Sb3VuZCAhPSBtc2cuUm91bmQgfHwgcHJzLlByb3Bvc2FsIHRoZW4gcmV0dXJuCiAgICBwcnMuUHJvcG9zYWwgPSB0cnVlCiAgICBpZiBwcnMuUHJvcG9zYWxCbG9ja1BhcnRzID09IGVtcHR5IHNldCB0aGVuIC8vIG90aGVyd2lzZSBpdCBpcyBzZXQgaW4gTmV3VmFsaWRCbG9ja01lc3NhZ2UgaGFuZGxlcgogICAgICBwcnMuUHJvcG9zYWxCbG9ja1BhcnRzSGVhZGVyID0gbXNnLkJsb2NrUGFydHNIZWFkZXIKICAgIHBycy5Qcm9wb3NhbFBPTFJvdW5kID0gbXNnLlBPTFJvdW5kCiAgICBwcnMuUHJvcG9zYWxQT0wgPSBuaWwKICAgIFNlbmQgbXNnIHRocm91Z2ggaW50ZXJuYWwgcGVlck1zZ1F1ZXVlIHRvIENvbnNlbnN1c1N0YXRlIHNlcnZpY2UK"}}),e._v(" "),t("h3",{attrs:{id:"proposalpolmessage-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposalpolmessage-handler"}},[e._v("#")]),e._v(" ProposalPOLMessage handler")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aGFuZGxlTWVzc2FnZShtc2cpOgogICAgaWYgcHJzLkhlaWdodCAhPSBtc2cuSGVpZ2h0IG9yIHBycy5Qcm9wb3NhbFBPTFJvdW5kICE9IG1zZy5Qcm9wb3NhbFBPTFJvdW5kIHRoZW4gcmV0dXJuCiAgICBwcnMuUHJvcG9zYWxQT0wgPSBtc2cuUHJvcG9zYWxQT0wK"}}),e._v(" "),t("p",[e._v("The number of votes is limited to 10000 ("),t("code",[e._v("types.MaxVotesCount")]),e._v(") to protect the\nnode against DOS attacks.")]),e._v(" "),t("h3",{attrs:{id:"blockpartmessage-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blockpartmessage-handler"}},[e._v("#")]),e._v(" BlockPartMessage handler")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aGFuZGxlTWVzc2FnZShtc2cpOgogICAgaWYgcHJzLkhlaWdodCAhPSBtc2cuSGVpZ2h0IHx8IHBycy5Sb3VuZCAhPSBtc2cuUm91bmQgdGhlbiByZXR1cm4KICAgIFJlY29yZCBpbiBwcnMgdGhhdCBwZWVyIGhhcyBibG9jayBwYXJ0IG1zZy5QYXJ0LkluZGV4CiAgICBTZW5kIG1zZyB0cm91Z2ggaW50ZXJuYWwgcGVlck1zZ1F1ZXVlIHRvIENvbnNlbnN1c1N0YXRlIHNlcnZpY2UK"}}),e._v(" "),t("h3",{attrs:{id:"votemessage-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#votemessage-handler"}},[e._v("#")]),e._v(" VoteMessage handler")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aGFuZGxlTWVzc2FnZShtc2cpOgogICAgUmVjb3JkIGluIHBycyB0aGF0IGEgcGVlciBrbm93cyB2b3RlIHdpdGggaW5kZXggbXNnLnZvdGUuVmFsaWRhdG9ySW5kZXggZm9yIHBhcnRpY3VsYXIgaGVpZ2h0IGFuZCByb3VuZAogICAgU2VuZCBtc2cgdHJvdWdoIGludGVybmFsIHBlZXJNc2dRdWV1ZSB0byBDb25zZW5zdXNTdGF0ZSBzZXJ2aWNlCg=="}}),e._v(" "),t("h3",{attrs:{id:"votesetbitsmessage-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#votesetbitsmessage-handler"}},[e._v("#")]),e._v(" VoteSetBitsMessage handler")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aGFuZGxlTWVzc2FnZShtc2cpOgogICAgVXBkYXRlIHBycyBmb3IgdGhlIGJpdC1hcnJheSBvZiB2b3RlcyBwZWVyIGNsYWltcyB0byBoYXZlIGZvciB0aGUgbXNnLkJsb2NrSUQK"}}),e._v(" "),t("p",[e._v("The number of votes is limited to 10000 ("),t("code",[e._v("types.MaxVotesCount")]),e._v(") to protect the\nnode against DOS attacks.")]),e._v(" "),t("h2",{attrs:{id:"gossip-data-routine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gossip-data-routine"}},[e._v("#")]),e._v(" Gossip Data Routine")]),e._v(" "),t("p",[e._v("It is used to send the following messages to the peer: "),t("code",[e._v("BlockPartMessage")]),e._v(", "),t("code",[e._v("ProposalMessage")]),e._v(" and\n"),t("code",[e._v("ProposalPOLMessage")]),e._v(" on the DataChannel. The gossip data routine is based on the local RoundState ("),t("code",[e._v("rs")]),e._v(")\nand the known PeerRoundState ("),t("code",[e._v("prs")]),e._v("). The routine repeats forever the logic shown below:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"MWEpIGlmIHJzLlByb3Bvc2FsQmxvY2tQYXJ0c0hlYWRlciA9PSBwcnMuUHJvcG9zYWxCbG9ja1BhcnRzSGVhZGVyIGFuZCB0aGUgcGVlciBkb2VzIG5vdCBoYXZlIGFsbCB0aGUgcHJvcG9zYWwgcGFydHMgdGhlbgogICAgICAgIFBhcnQgPSBwaWNrIGEgcmFuZG9tIHByb3Bvc2FsIGJsb2NrIHBhcnQgdGhlIHBlZXIgZG9lcyBub3QgaGF2ZQogICAgICAgIFNlbmQgQmxvY2tQYXJ0TWVzc2FnZShycy5IZWlnaHQsIHJzLlJvdW5kLCBQYXJ0KSB0byB0aGUgcGVlciBvbiB0aGUgRGF0YUNoYW5uZWwKICAgICAgICBpZiBzZW5kIHJldHVybnMgdHJ1ZSwgcmVjb3JkIHRoYXQgdGhlIHBlZXIga25vd3MgdGhlIGNvcnJlc3BvbmRpbmcgYmxvY2sgUGFydAogICAgIENvbnRpbnVlCgoxYikgaWYgKDAgJmx0OyBwcnMuSGVpZ2h0KSBhbmQgKHBycy5IZWlnaHQgJmx0OyBycy5IZWlnaHQpIHRoZW4KICAgICAgICBoZWxwIHBlZXIgY2F0Y2ggdXAgdXNpbmcgZ29zc2lwRGF0YUZvckNhdGNodXAgZnVuY3Rpb24KICAgICAgICBDb250aW51ZQoKMWMpIGlmIChycy5IZWlnaHQgIT0gcHJzLkhlaWdodCkgb3IgKHJzLlJvdW5kICE9IHBycy5Sb3VuZCkgdGhlbgogICAgICAgIFNsZWVwIFBlZXJHb3NzaXBTbGVlcER1cmF0aW9uCiAgICAgICAgQ29udGludWUKCi8vICBhdCB0aGlzIHBvaW50IHJzLkhlaWdodCA9PSBwcnMuSGVpZ2h0IGFuZCBycy5Sb3VuZCA9PSBwcnMuUm91bmQKMWQpIGlmIChycy5Qcm9wb3NhbCAhPSBuaWwgYW5kICFwcnMuUHJvcG9zYWwpIHRoZW4KICAgICAgICBTZW5kIFByb3Bvc2FsTWVzc2FnZShycy5Qcm9wb3NhbCkgdG8gdGhlIHBlZXIKICAgICAgICBpZiBzZW5kIHJldHVybnMgdHJ1ZSwgcmVjb3JkIHRoYXQgdGhlIHBlZXIga25vd3MgUHJvcG9zYWwKICAgICBpZiAwICZsdDs9IHJzLlByb3Bvc2FsLlBPTFJvdW5kIHRoZW4KICAgICBwb2xSb3VuZCA9IHJzLlByb3Bvc2FsLlBPTFJvdW5kCiAgICAgICAgcHJldm90ZXNCaXRBcnJheSA9IHJzLlZvdGVzLlByZXZvdGVzKHBvbFJvdW5kKS5CaXRBcnJheSgpCiAgICAgICAgU2VuZCBQcm9wb3NhbFBPTE1lc3NhZ2UocnMuSGVpZ2h0LCBwb2xSb3VuZCwgcHJldm90ZXNCaXRBcnJheSkKICAgICAgICBDb250aW51ZQoKMikgIFNsZWVwIFBlZXJHb3NzaXBTbGVlcER1cmF0aW9uCg=="}}),e._v(" "),t("h3",{attrs:{id:"gossip-data-for-catchup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gossip-data-for-catchup"}},[e._v("#")]),e._v(" Gossip Data For Catchup")]),e._v(" "),t("p",[e._v("This function is responsible for helping peer catch up if it is at the smaller height (prs.Height < rs.Height).\nThe function executes the following logic:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAgIGlmIHBlZXIgZG9lcyBub3QgaGF2ZSBhbGwgYmxvY2sgcGFydHMgZm9yIHBycy5Qcm9wb3NhbEJsb2NrUGFydCB0aGVuCiAgICAgICAgYmxvY2tNZXRhID0gIExvYWQgQmxvY2sgTWV0YWRhdGEgZm9yIGhlaWdodCBwcnMuSGVpZ2h0IGZyb20gYmxvY2tTdG9yZQogICAgICAgIGlmICghYmxvY2tNZXRhLkJsb2NrSUQuUGFydHNIZWFkZXIgPT0gcHJzLlByb3Bvc2FsQmxvY2tQYXJ0c0hlYWRlcikgdGhlbgogICAgICAgICAgICBTbGVlcCBQZWVyR29zc2lwU2xlZXBEdXJhdGlvbgogICAgIHJldHVybgogICAgICAgIFBhcnQgPSBwaWNrIGEgcmFuZG9tIHByb3Bvc2FsIGJsb2NrIHBhcnQgdGhlIHBlZXIgZG9lcyBub3QgaGF2ZQogICAgICAgIFNlbmQgQmxvY2tQYXJ0TWVzc2FnZShwcnMuSGVpZ2h0LCBwcnMuUm91bmQsIFBhcnQpIHRvIHRoZSBwZWVyIG9uIHRoZSBEYXRhQ2hhbm5lbAogICAgICAgIGlmIHNlbmQgcmV0dXJucyB0cnVlLCByZWNvcmQgdGhhdCB0aGUgcGVlciBrbm93cyB0aGUgY29ycmVzcG9uZGluZyBibG9jayBQYXJ0CiAgICAgICAgcmV0dXJuCiAgICBlbHNlIFNsZWVwIFBlZXJHb3NzaXBTbGVlcER1cmF0aW9uCg=="}}),e._v(" "),t("h2",{attrs:{id:"gossip-votes-routine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gossip-votes-routine"}},[e._v("#")]),e._v(" Gossip Votes Routine")]),e._v(" "),t("p",[e._v("It is used to send the following message: "),t("code",[e._v("VoteMessage")]),e._v(" on the VoteChannel.\nThe gossip votes routine is based on the local RoundState ("),t("code",[e._v("rs")]),e._v(")\nand the known PeerRoundState ("),t("code",[e._v("prs")]),e._v("). The routine repeats forever the logic shown below:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"MWEpIGlmIHJzLkhlaWdodCA9PSBwcnMuSGVpZ2h0IHRoZW4KICAgICAgICBpZiBwcnMuU3RlcCA9PSBSb3VuZFN0ZXBOZXdIZWlnaHQgdGhlbgogICAgICAgICAgICB2b3RlID0gcmFuZG9tIHZvdGUgZnJvbSBycy5MYXN0Q29tbWl0IHRoZSBwZWVyIGRvZXMgbm90IGhhdmUKICAgICAgICAgICAgU2VuZCBWb3RlTWVzc2FnZSh2b3RlKSB0byB0aGUgcGVlcgogICAgICAgICAgICBpZiBzZW5kIHJldHVybnMgdHJ1ZSwgY29udGludWUKCiAgICAgICAgaWYgcHJzLlN0ZXAgJmx0Oz0gUm91bmRTdGVwUHJldm90ZSBhbmQgcHJzLlJvdW5kICE9IC0xIGFuZCBwcnMuUm91bmQgJmx0Oz0gcnMuUm91bmQgdGhlbgogICAgICAgICAgICBQcmV2b3RlcyA9IHJzLlZvdGVzLlByZXZvdGVzKHBycy5Sb3VuZCkKICAgICAgICAgICAgdm90ZSA9IHJhbmRvbSB2b3RlIGZyb20gUHJldm90ZXMgdGhlIHBlZXIgZG9lcyBub3QgaGF2ZQogICAgICAgICAgICBTZW5kIFZvdGVNZXNzYWdlKHZvdGUpIHRvIHRoZSBwZWVyCiAgICAgICAgICAgIGlmIHNlbmQgcmV0dXJucyB0cnVlLCBjb250aW51ZQoKICAgICAgICBpZiBwcnMuU3RlcCAmbHQ7PSBSb3VuZFN0ZXBQcmVjb21taXQgYW5kIHBycy5Sb3VuZCAhPSAtMSBhbmQgcHJzLlJvdW5kICZsdDs9IHJzLlJvdW5kIHRoZW4KICAgICAgICAgIFByZWNvbW1pdHMgPSBycy5Wb3Rlcy5QcmVjb21taXRzKHBycy5Sb3VuZCkKICAgICAgICAgICAgdm90ZSA9IHJhbmRvbSB2b3RlIGZyb20gUHJlY29tbWl0cyB0aGUgcGVlciBkb2VzIG5vdCBoYXZlCiAgICAgICAgICAgIFNlbmQgVm90ZU1lc3NhZ2Uodm90ZSkgdG8gdGhlIHBlZXIKICAgICAgICAgICAgaWYgc2VuZCByZXR1cm5zIHRydWUsIGNvbnRpbnVlCgogICAgICAgIGlmIHBycy5Qcm9wb3NhbFBPTFJvdW5kICE9IC0xIHRoZW4KICAgICAgICAgICAgUG9sUHJldm90ZXMgPSBycy5Wb3Rlcy5QcmV2b3RlcyhwcnMuUHJvcG9zYWxQT0xSb3VuZCkKICAgICAgICAgICAgdm90ZSA9IHJhbmRvbSB2b3RlIGZyb20gUG9sUHJldm90ZXMgdGhlIHBlZXIgZG9lcyBub3QgaGF2ZQogICAgICAgICAgICBTZW5kIFZvdGVNZXNzYWdlKHZvdGUpIHRvIHRoZSBwZWVyCiAgICAgICAgICAgIGlmIHNlbmQgcmV0dXJucyB0cnVlLCBjb250aW51ZQoKMWIpICBpZiBwcnMuSGVpZ2h0ICE9IDAgYW5kIHJzLkhlaWdodCA9PSBwcnMuSGVpZ2h0KzEgdGhlbgogICAgICAgIHZvdGUgPSByYW5kb20gdm90ZSBmcm9tIHJzLkxhc3RDb21taXQgcGVlciBkb2VzIG5vdCBoYXZlCiAgICAgICAgU2VuZCBWb3RlTWVzc2FnZSh2b3RlKSB0byB0aGUgcGVlcgogICAgICAgIGlmIHNlbmQgcmV0dXJucyB0cnVlLCBjb250aW51ZQoKMWMpICBpZiBwcnMuSGVpZ2h0ICE9IDAgYW5kIHJzLkhlaWdodCAmZ3Q7PSBwcnMuSGVpZ2h0KzIgdGhlbgogICAgICAgIENvbW1pdCA9IGdldCBjb21taXQgZnJvbSBCbG9ja1N0b3JlIGZvciBwcnMuSGVpZ2h0CiAgICAgICAgdm90ZSA9IHJhbmRvbSB2b3RlIGZyb20gQ29tbWl0IHRoZSBwZWVyIGRvZXMgbm90IGhhdmUKICAgICAgICBTZW5kIFZvdGVNZXNzYWdlKHZvdGUpIHRvIHRoZSBwZWVyCiAgICAgICAgaWYgc2VuZCByZXR1cm5zIHRydWUsIGNvbnRpbnVlCgoyKSAgIFNsZWVwIFBlZXJHb3NzaXBTbGVlcER1cmF0aW9uCg=="}}),e._v(" "),t("h2",{attrs:{id:"querymaj23routine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#querymaj23routine"}},[e._v("#")]),e._v(" QueryMaj23Routine")]),e._v(" "),t("p",[e._v("It is used to send the following message: "),t("code",[e._v("VoteSetMaj23Message")]),e._v(". "),t("code",[e._v("VoteSetMaj23Message")]),e._v(" is sent to indicate that a given\nBlockID has seen +2/3 votes. This routine is based on the local RoundState ("),t("code",[e._v("rs")]),e._v(") and the known PeerRoundState\n("),t("code",[e._v("prs")]),e._v("). The routine repeats forever the logic shown below.")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"MWEpIGlmIHJzLkhlaWdodCA9PSBwcnMuSGVpZ2h0IHRoZW4KICAgICAgICBQcmV2b3RlcyA9IHJzLlZvdGVzLlByZXZvdGVzKHBycy5Sb3VuZCkKICAgICAgICBpZiB0aGVyZSBpcyBhIOKFlCBtYWpvcml0eSBmb3Igc29tZSBibG9ja0lkIGluIFByZXZvdGVzIHRoZW4KICAgICAgICBtID0gVm90ZVNldE1hajIzTWVzc2FnZShwcnMuSGVpZ2h0LCBwcnMuUm91bmQsIFByZXZvdGUsIGJsb2NrSWQpCiAgICAgICAgU2VuZCBtIHRvIHBlZXIKICAgICAgICBTbGVlcCBQZWVyUXVlcnlNYWoyM1NsZWVwRHVyYXRpb24KCjFiKSBpZiBycy5IZWlnaHQgPT0gcHJzLkhlaWdodCB0aGVuCiAgICAgICAgUHJlY29tbWl0cyA9IHJzLlZvdGVzLlByZWNvbW1pdHMocHJzLlJvdW5kKQogICAgICAgIGlmIHRoZXJlIGlzIGEg4oWUIG1ham9yaXR5IGZvciBzb21lIGJsb2NrSWQgaW4gUHJlY29tbWl0cyB0aGVuCiAgICAgICAgbSA9IFZvdGVTZXRNYWoyM01lc3NhZ2UocHJzLkhlaWdodCxwcnMuUm91bmQsUHJlY29tbWl0LGJsb2NrSWQpCiAgICAgICAgU2VuZCBtIHRvIHBlZXIKICAgICAgICBTbGVlcCBQZWVyUXVlcnlNYWoyM1NsZWVwRHVyYXRpb24KCjFjKSBpZiBycy5IZWlnaHQgPT0gcHJzLkhlaWdodCBhbmQgcHJzLlByb3Bvc2FsUE9MUm91bmQgJmd0Oz0gMCB0aGVuCiAgICAgICAgUHJldm90ZXMgPSBycy5Wb3Rlcy5QcmV2b3RlcyhwcnMuUHJvcG9zYWxQT0xSb3VuZCkKICAgICAgICBpZiB0aGVyZSBpcyBhIOKFlCBtYWpvcml0eSBmb3Igc29tZSBibG9ja0lkIGluIFByZXZvdGVzIHRoZW4KICAgICAgICBtID0gVm90ZVNldE1hajIzTWVzc2FnZShwcnMuSGVpZ2h0LHBycy5Qcm9wb3NhbFBPTFJvdW5kLFByZXZvdGVzLGJsb2NrSWQpCiAgICAgICAgU2VuZCBtIHRvIHBlZXIKICAgICAgICBTbGVlcCBQZWVyUXVlcnlNYWoyM1NsZWVwRHVyYXRpb24KCjFkKSBpZiBwcnMuQ2F0Y2h1cENvbW1pdFJvdW5kICE9IC0xIGFuZCAwICZsdDsgcHJzLkhlaWdodCBhbmQKICAgICAgICBwcnMuSGVpZ2h0ICZsdDs9IGJsb2NrU3RvcmUuSGVpZ2h0KCkgdGhlbgogICAgICAgIENvbW1pdCA9IExvYWRDb21taXQocHJzLkhlaWdodCkKICAgICAgICBtID0gVm90ZVNldE1hajIzTWVzc2FnZShwcnMuSGVpZ2h0LENvbW1pdC5Sb3VuZCxQcmVjb21taXQsQ29tbWl0LkJsb2NrSUQpCiAgICAgICAgU2VuZCBtIHRvIHBlZXIKICAgICAgICBTbGVlcCBQZWVyUXVlcnlNYWoyM1NsZWVwRHVyYXRpb24KCjIpICBTbGVlcCBQZWVyUXVlcnlNYWoyM1NsZWVwRHVyYXRpb24K"}}),e._v(" "),t("h2",{attrs:{id:"broadcast-routine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broadcast-routine"}},[e._v("#")]),e._v(" Broadcast routine")]),e._v(" "),t("p",[e._v("The Broadcast routine subscribes to an internal event bus to receive new round steps and votes messages, and broadcasts messages to peers upon receiving those\nevents.\nIt broadcasts "),t("code",[e._v("NewRoundStepMessage")]),e._v(" or "),t("code",[e._v("CommitStepMessage")]),e._v(" upon new round state event. Note that\nbroadcasting these messages does not depend on the PeerRoundState; it is sent on the StateChannel.\nUpon receiving VoteMessage it broadcasts "),t("code",[e._v("HasVoteMessage")]),e._v(" message to its peers on the StateChannel.")]),e._v(" "),t("h2",{attrs:{id:"channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channels"}},[e._v("#")]),e._v(" Channels")]),e._v(" "),t("p",[e._v("Defines 4 channels: state, data, vote and vote_set_bits. Each channel\nhas "),t("code",[e._v("SendQueueCapacity")]),e._v(" and "),t("code",[e._v("RecvBufferCapacity")]),e._v(" and\n"),t("code",[e._v("RecvMessageCapacity")]),e._v(" set to "),t("code",[e._v("maxMsgSize")]),e._v(".")]),e._v(" "),t("p",[e._v("Sending incorrectly encoded data will result in stopping the peer.")])],1)}),[],!1,null,null,null);g.default=s.exports}}]);