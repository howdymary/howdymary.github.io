/* Proposed application architectures; examples are fictional. */
window.USECASE_DEPTH = {
  "seo": {
    "nodes": [
      {
        "title": "1. Contract + baseline",
        "actor": "Customer owner + workflow",
        "input": "SignalDesk targets teams evaluating HubSpot integration. One selected integration page and a dated search-performance export.",
        "operation": "Define qualified demo requests as the business outcome. Join query, page, and conversion tables using documented keys; mark absent metrics unknown.",
        "output": "Question, page inventory, baseline cohort, and editor.",
        "rule": "Code validates dates, page IDs, denominators, and permitted data. The model can summarize the audience’s questions.",
        "failure": "Page views rise while qualified requests fall: revisit intent and the conversion path."
      },
      {
        "title": "2. Collect + preserve",
        "actor": "Approved readers + ingestion",
        "input": "The integration guide, customer questions, permitted search results, and original competitor pages.",
        "operation": "Read underlying pages and keep original passages, URLs, headings, retrieval/publication dates, and content hashes. Separate our product facts from competitors’ claims.",
        "output": "Evidence E1: HubSpot support is released. E2: Salesforce is planned. Page snapshot P1 contains an unsupported “works with every CRM” claim.",
        "rule": "Allowlisted connectors and tenant filters bound access; page text cannot grant new tool permissions.",
        "failure": "Search snippets omit a limitation: fetch the source before treating the snippet as evidence."
      },
      {
        "title": "3. Audit + map intent",
        "actor": "Rules + research model",
        "input": "Evidence, rendered page content, sitemap links, and the target question: “Which CRM integrations work today?”",
        "operation": "Check discoverability with appropriate technical tools; map questions to pages. Compare each capability claim with current product documentation.",
        "output": "Gap G1: the page does not distinguish released HubSpot support from planned Salesforce support.",
        "rule": "Code checks inspectable technical conditions. The model explains the content gap and links it to source passages.",
        "failure": "The model treats FAQ markup as a guarantee of AI citations: reject the unsupported recommendation."
      },
      {
        "title": "4. Prioritize a change",
        "actor": "Editor + prioritization workflow",
        "input": "Gap G1, affected queries, conversion relevance, evidence quality, effort, and dependencies.",
        "operation": "Prioritize an accurate integration table. Explain buyer value and what evidence could change the priority.",
        "output": "Change C1: replace the broad claim with a current integration/limitation table and a relevant next step.",
        "rule": "Use explicit prioritization criteria; a generated numerical score is not proof of value.",
        "failure": "High traffic attracts the wrong buyer: assess qualification."
      },
      {
        "title": "5. Draft + validate",
        "actor": "Model + deterministic checks + editor",
        "input": "Approved product facts, page snapshot, proposed change, and brand guidance.",
        "operation": "Draft the update with claim-to-source links. Validate required fields and source IDs; have an editor check factual support, originality, and usefulness.",
        "output": "An approved before/after change tied to a page version.",
        "rule": "Publishing is a separate authorized tool. Recheck the page version before applying edits.",
        "failure": "The source page changed after review: rebase and review the affected change rather than overwriting it."
      },
      {
        "title": "6. Capture outcomes",
        "actor": "Analytics + customer owner",
        "input": "Publish receipt, page/change IDs, dated observations, and qualified conversion events.",
        "operation": "Record implementation at publish time; measure visibility and qualified outcomes over a declared window with a baseline or comparison cohort.",
        "output": "A decision to keep, revise, or reverse C1, with uncertainty and attribution limits.",
        "rule": "Track publication, indexing observations, leads, and qualified opportunities as separate events.",
        "failure": "One AI-answer snapshot changes: it is an observation, not causal proof of revenue lift."
      }
    ],
    "schema": "{\n  \"record_type\": \"fictional_content_change\",\n  \"tenant_id\": \"signaldesk-demo\",\n  \"run_id\": \"seo-001\",\n  \"page_id\": \"integration-guide\",\n  \"page_version\": \"sha256:fixture-v1\",\n  \"query_cluster\": \"released CRM integrations\",\n  \"scope\": {\n    \"locale\": \"en-US\",\n    \"window\": \"2026-11-01/2026-11-16\"\n  },\n  \"evidence\": [\n    {\n      \"source_id\": \"E1\",\n      \"url\": \"https://example.com/fictional-signaldesk/integrations/hubspot\",\n      \"published_at\": \"2026-11-01\",\n      \"retrieved_at\": \"2026-11-16T18:00:00Z\",\n      \"version\": \"v2\"\n    }\n  ],\n  \"change_id\": \"C1\",\n  \"finding\": \"Broad CRM claim exceeds released capabilities\",\n  \"status\": \"awaiting_editor_review\",\n  \"outcome_definition\": \"qualified demo request from affected page cohort\",\n  \"outcome_events\": [\n    {\n      \"type\": \"published\",\n      \"occurred_at\": null,\n      \"receipt\": null\n    },\n    {\n      \"type\": \"qualified_demo_request\",\n      \"occurred_at\": null,\n      \"account_id\": null\n    }\n  ],\n  \"metric_value\": null\n}",
    "tools": [
      {
        "name": "read_page + inspect_indexing",
        "inputs": "Approved URL/page ID",
        "output": "Rendered text, metadata, crawl/indexing evidence",
        "permission": "Read-only; approved sources and authenticated site tools"
      },
      {
        "name": "retrieve_knowledge",
        "inputs": "Question + server-derived tenant scope",
        "output": "Current product passages with source IDs",
        "permission": "Same retrieval boundary demonstrated by the starter"
      },
      {
        "name": "draft_content_change",
        "inputs": "Page version + claims + evidence IDs",
        "output": "Reviewable text diff",
        "permission": "Draft-only"
      },
      {
        "name": "publish_approved_change",
        "inputs": "Approved change ID + expected page version",
        "output": "Publish receipt/version",
        "permission": "Explicitly authorized publishing capability"
      }
    ],
    "evals": [
      {
        "case": "The page claims Salesforce is released.",
        "expected": "Flag the mismatch and cite current capability evidence.",
        "measure": "Supported findings / reviewed findings"
      },
      {
        "case": "Two page variants share the same canonical content.",
        "expected": "Avoid duplicate recommendations and record canonical identity.",
        "measure": "Duplicate finding rate"
      },
      {
        "case": "Search traffic improves but qualified requests decline.",
        "expected": "Report both; investigate intent, offer, and funnel changes.",
        "measure": "Qualified conversion rate + review-adjusted time saved"
      }
    ],
    "deployment": "Begin with one query cluster and reviewed briefs. Pilot selected changes with an editor and measurement owner. The downloadable starter implements the retrieval/API/MCP building block; crawl audits, analytics, CMS publishing, and attribution require the stated integrations.",
    "repeatable": "Reuse evidence capture, page/intent tables, validation, and review. Configure audience, product facts, source policy, CMS mapping, and qualification definition for each customer.",
    "metric": "Primary: qualified conversions from the defined page cohort over a stated window. Supporting: recommendation acceptance, factual errors, review time, and search visibility. Do not guarantee rankings or AI citations.",
    "sources": [
      {
        "title": "Google · AI search optimization guidance",
        "url": "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
      },
      {
        "title": "Google · AI features and websites",
        "url": "https://developers.google.com/search/docs/appearance/ai-features"
      },
      {
        "title": "Anthropic · Evaluation design",
        "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
      }
    ]
  },
  "leads": {
    "nodes": [
      {
        "title": "1. Define fit + eligibility",
        "actor": "Sales owner + rules",
        "input": "Fictional Northstar: 80-person SaaS company, confirmed HubSpot use, three open sales roles. Suppression status is false.",
        "operation": "Define the target buyer and supported workflow. Normalize the company domain; join accounts, contacts, ownership, and suppression tables.",
        "output": "A1 is eligible for research; qualification still needs evidence.",
        "rule": "Suppression, ownership, identity, and tenant checks run in code before outreach.",
        "failure": "A suppressed account stays blocked regardless of model score."
      },
      {
        "title": "2. Research + enrich",
        "actor": "Research agent + approved tools",
        "input": "A1, approved company sources, CRM history, and licensed/public business data.",
        "operation": "Confirm buying signals and relevant roles; record provenance and timestamps. Keep job-posting evidence distinct from inferred need.",
        "output": "Account brief: hiring is observed; manual CRM-entry pain is a hypothesis to test.",
        "rule": "Use authorized enrichment fields and current source access. Never fabricate missing CRM or contact information.",
        "failure": "Enrichment conflicts with a newer customer record: preserve the disagreement and resolve it."
      },
      {
        "title": "3. Match product truth",
        "actor": "Retrieval + model",
        "input": "The account brief and versioned SignalDesk capability catalog.",
        "operation": "Retrieve approved HubSpot contact/company-record syncing and the Salesforce roadmap limitation. Map an evidenced workflow to supported functionality.",
        "output": "A capability-to-need table with supported, unsupported, and unknown rows.",
        "rule": "Every demo feature claim needs current product evidence; roadmap entries cannot authorize released-feature claims.",
        "failure": "The prospect actually uses Salesforce: explain the limitation or offer a clearly labeled concept, not a working-integration claim."
      },
      {
        "title": "4. Build a relevant demo",
        "actor": "Sandbox builder + templates",
        "input": "Approved workflow, synthetic contact/company data, and selected demo components.",
        "operation": "Configure a short walkthrough: inspect synthetic records, preview HubSpot field mapping, review the proposed sync. Explain the value mechanism without inventing ROI.",
        "output": "Demo D1 and script tailored to Northstar’s scaling sales team; all records are explicitly synthetic.",
        "rule": "Sandbox credentials and test data only. A mocked interaction must be labeled as mocked.",
        "failure": "A polished screen has broken controls: test interactions."
      },
      {
        "title": "5. Review + execute once",
        "actor": "Rep + controlled action adapter",
        "input": "D1, claim checks, current recipient eligibility, and outreach draft.",
        "operation": "Test the demo, review claims, and recheck suppression/ownership at send time. Execute only the approved action and persist the provider receipt.",
        "output": "A reviewed demo/outreach package and action ledger entry for A1.",
        "rule": "Stable action key and status reconciliation prevent duplicate sends after retries.",
        "failure": "The send request times out: status is uncertain until reconciled; do not immediately resend."
      },
      {
        "title": "6. Follow the revenue cohort",
        "actor": "CRM events + revenue owner",
        "input": "Research/run IDs linked to account, contact, opportunity, contract, and renewal events.",
        "operation": "Capture meeting acceptance, opportunity qualification, won value, service cost, and retention when each event occurs. Account for outcome lag.",
        "output": "A cohort view of accepted opportunities and retained economic value, not just generated leads.",
        "rule": "Separate proposed, sent, meeting-held, qualified, won, and retained states.",
        "failure": "Ten large deals may outperform 100 small deals—or concentrate risk. Compare margins, win rates, cycle time, and churn."
      }
    ],
    "schema": "{\n  \"record_type\": \"fictional_account_demo\",\n  \"tenant_id\": \"signaldesk-demo\",\n  \"run_id\": \"lead-001\",\n  \"account_id\": \"A1\",\n  \"domain\": \"northstar.example\",\n  \"eligibility\": {\n    \"suppressed\": false,\n    \"owner\": \"rep-demo\"\n  },\n  \"observed_signal\": {\n    \"type\": \"sales_hiring\",\n    \"source_id\": \"E-hiring\",\n    \"published_at\": \"2026-11-10\",\n    \"retrieved_at\": \"2026-11-16T18:00:00Z\"\n  },\n  \"hypothesis\": \"Growing team may benefit from consistent CRM record syncing\",\n  \"capability_ids\": [\n    \"hubspot-contact-company-sync-v2\"\n  ],\n  \"demo_id\": \"D1\",\n  \"demo_data\": \"synthetic\",\n  \"status\": \"awaiting_rep_review\",\n  \"action_id\": \"A1:campaign-demo:edition-01\",\n  \"outcome_events\": [\n    {\n      \"type\": \"qualified_opportunity\",\n      \"occurred_at\": null,\n      \"opportunity_id\": null\n    },\n    {\n      \"type\": \"won\",\n      \"occurred_at\": null,\n      \"contract_value\": null\n    },\n    {\n      \"type\": \"renewed_or_churned\",\n      \"occurred_at\": null,\n      \"retained_value\": null\n    }\n  ]\n}",
    "tools": [
      {
        "name": "read_account + enrich_company",
        "inputs": "Stable account/domain ID",
        "output": "Normalized records, dated signals, unknowns",
        "permission": "Authorized read fields; tenant and ownership scope"
      },
      {
        "name": "retrieve_knowledge",
        "inputs": "Product question",
        "output": "Versioned capability evidence",
        "permission": "Read-only; current product catalog"
      },
      {
        "name": "build_demo + test_demo",
        "inputs": "Approved template + synthetic scenario",
        "output": "Sandbox artifact + interaction test results",
        "permission": "Sandbox-only; no customer-data imports"
      },
      {
        "name": "send_approved_outreach",
        "inputs": "Approval ID + recipient + stable action key",
        "output": "Provider receipt or uncertain status",
        "permission": "Current suppression/ownership gate; controlled write"
      }
    ],
    "evals": [
      {
        "case": "CRM is unknown but the model declares perfect fit.",
        "expected": "Return unknown and a targeted follow-up question.",
        "measure": "Precision among qualified accounts"
      },
      {
        "case": "Demo uses a planned integration.",
        "expected": "Block the released-feature claim and show the limitation.",
        "measure": "Capability accuracy + interaction pass rate"
      },
      {
        "case": "Send times out after provider acceptance.",
        "expected": "Reconcile by stable action key and avoid a second send.",
        "measure": "Duplicate-action rate + outcome completeness"
      }
    ],
    "deployment": "Start with account briefs and reviewed demo drafts for one segment. Add authorized execution only after quality and action-recovery checks pass. The starter covers retrieval integrations; CRM enrichment, sandbox generation, testing, and delivery adapters remain explicit implementation work.",
    "repeatable": "Reuse the account/evidence/capability/demo/action contracts. Configure ICP, qualification rules, approved product catalog, CRM fields, and demo templates per customer. Promote repeated needs into shared components after field evidence.",
    "metric": "Primary: accepted opportunity value and later retained contribution by cohort. Track win rate, sales-cycle time, review/support cost, concentration, and churn; lead count and reply rate are intermediate signals.",
    "sources": [
      {
        "title": "Monaco · Product workflows",
        "url": "https://www.monaco.com/product"
      },
      {
        "title": "Anthropic · Writing effective tools",
        "url": "https://www.anthropic.com/engineering/writing-tools-for-agents"
      },
      {
        "title": "MDN · Idempotency",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent"
      }
    ]
  },
  "news": {
    "nodes": [
      {
        "title": "1. Set the briefing contract",
        "actor": "User + configuration",
        "input": "Watch three fictional competitors; prioritize pricing/integration changes; weekdays at 08:00 America/Los_Angeles.",
        "operation": "Define decision relevance, sources, exclusions, materiality, destination, and owner. Store the IANA timezone and explicit missed-run/DST policy. Decide whether no material change should produce silence or a requested status report.",
        "output": "Briefing profile B1 with an explicit “no material change” outcome.",
        "rule": "The guide does not schedule a real job. Deployment needs an authorized scheduler and destination.",
        "failure": "Every minor mention is treated as urgent: refine materiality against the user’s decisions."
      },
      {
        "title": "2. Wake from the durable inbox",
        "actor": "Timer + inbox + source adapters",
        "input": "B1, a stable scheduled-occurrence event, last successful watermark, approved source registry, and historical snapshots.",
        "operation": "A durable timer enqueues an occurrence in the same inbox used for user replies and webhooks. One active worker for that tenant/profile inbox claims it. Fetch with an overlap window for late arrivals; persist snapshots and separate event/publication/retrieval dates before advancing progress.",
        "output": "Current price snapshot E-new: USD 59/user/month; prior E-old: USD 49 on the same billing basis; persisted task progress.",
        "rule": "Proposed design: deduplicate source/occurrence IDs within tenant scope; protect worker claims with a lease and fencing/version check. Advance the collection watermark only after durable processing.",
        "failure": "A worker crashes or its lease expires: reclaim pending work, reject stale commits, and retain partial progress. A source outage remains a coverage gap."
      },
      {
        "title": "3. Normalize + detect change",
        "actor": "Code + bounded interpretation",
        "input": "Current/prior snapshots, extracted tables, currencies, units, tiers, and effective dates.",
        "operation": "Compare equivalent facts. Ignore navigation/layout changes. Calculate (59−49)/49 in code: approximately 20.4%.",
        "output": "Event EV1: a same-tier monthly-price increase, with both evidence IDs.",
        "rule": "Model classifies changes; code validates units and arithmetic.",
        "failure": "Monthly and annual billing are mixed: block the percentage calculation until normalized."
      },
      {
        "title": "4. Verify + rank relevance",
        "actor": "Research agent + historical RAG",
        "input": "EV1 plus duplicate news coverage, prior reports, and the user’s decision profile.",
        "operation": "Cluster reports of the same event, favor original evidence, resolve contradictions, and separate implications from facts. Load durable preferences, task progress, and what was already communicated; retrieve live facts through evidence pointers rather than treating old memory as current truth.",
        "output": "One event bundle: confirmed price change; customer-contract impact remains unknown.",
        "rule": "A newly published article can describe an old event. Relevance scores need inspectable reasons.",
        "failure": "Five outlets repeat one press release: one underlying event, not five independent confirmations."
      },
      {
        "title": "5. Deliver, ask, or stay quiet",
        "actor": "Generator + permission checks + delivery ledger",
        "input": "Verified event bundles, briefing edition ID, recipient scope, current authority, and any version-bound approval.",
        "operation": "Produce what changed, why it may matter, sources, gaps, and next steps. Validate evidence and materiality. Deliver a useful briefing, finish quietly under the user’s policy, or defer an action for approval. Approval replies return through the inbox. A formal outbox can pace and recover dispatch.",
        "output": "Edition B1-2026-11-16: validated delivery intent, a recorded quiet outcome, or approval_pending with an exact artifact/action version.",
        "rule": "Proposed reliable dispatch: persist state and outbox intent together, use stable edition/recipient keys, and reconcile uncertain delivery. Recheck approval expiry, artifact version, and current permissions at execution.",
        "failure": "A crash after sending leaves an uncertain result: do not blindly resend. An edited briefing or changed recipient invalidates the old approval."
      },
      {
        "title": "6. Capture usefulness + learn",
        "actor": "Reader feedback + workflow owner",
        "input": "Delivery result, reading/review effort, relevance feedback, and later decisions.",
        "operation": "Record delivered, opened if available, useful/not useful, and decision impact as distinct events. Audit missed material events as well as false alerts.",
        "output": "A revised source/relevance policy with measured signal quality and complete run history.",
        "rule": "An open is not proof of usefulness; feedback must be attributed to the correct edition/event.",
        "failure": "A quiet report missed a launch: evaluate against reviewed events."
      }
    ],
    "schema": "{\n  \"record_type\": \"fictional_intelligence_event\",\n  \"tenant_id\": \"signaldesk-demo\",\n  \"profile_id\": \"B1\",\n  \"run_id\": \"news-001\",\n  \"edition_id\": \"B1-2026-11-16\",\n  \"timezone\": \"America/Los_Angeles\",\n  \"event_id\": \"EV1\",\n  \"entity_id\": \"competitor-demo\",\n  \"event_at\": \"2026-11-01T00:00:00Z\",\n  \"published_at\": null,\n  \"retrieved_at\": \"2026-11-16T15:30:00Z\",\n  \"comparison\": {\n    \"tier\": \"Pro\",\n    \"currency\": \"USD\",\n    \"unit\": \"user/month\",\n    \"billing\": \"monthly\",\n    \"old\": 49,\n    \"new\": 59,\n    \"change_pct\": 20.4082\n  },\n  \"evidence_ids\": [\n    \"E-old\",\n    \"E-new\"\n  ],\n  \"status\": \"validated_draft\",\n  \"collection_watermark\": \"2026-11-16T15:30:00Z\",\n  \"delivery_key\": \"B1-2026-11-16:reader-demo\",\n  \"delivery_receipt\": null,\n  \"feedback_events\": [\n    {\n      \"type\": \"usefulness\",\n      \"value\": null,\n      \"occurred_at\": null\n    }\n  ],\n  \"execution_example\": {\n    \"design_status\": \"proposed; not implemented by the bundled retrieval lab\",\n    \"inbox_key\": \"signaldesk-demo:B1\",\n    \"source_event_id\": \"weekday-briefing:B1:2026-11-16T08:00:00-08:00\",\n    \"event_type\": \"timer_due\",\n    \"event_status\": \"processing\",\n    \"worker_lease_expires_at\": \"2026-11-16T16:05:00Z\",\n    \"fencing_version\": 7,\n    \"session_mode\": \"new_from_memory_and_events\",\n    \"memory_pointers\": [\n      \"profile:B1\",\n      \"task:news-001\",\n      \"communication-log:B1\"\n    ],\n    \"approval\": {\n      \"required\": false,\n      \"artifact_version\": 1,\n      \"recipient_id\": \"reader-demo\",\n      \"expires_at\": null\n    },\n    \"outbox\": {\n      \"optional_design\": true,\n      \"action_key\": \"B1-2026-11-16:reader-demo:v1\",\n      \"status\": \"pending\",\n      \"provider_receipt\": null\n    }\n  }\n}",
    "tools": [
      {
        "name": "poll_sources + read_feed",
        "inputs": "Source IDs + watermark/overlap",
        "output": "Normalized items + original snapshots",
        "permission": "Approved read sources; bounded fetch budget"
      },
      {
        "name": "compare_snapshots + calculate",
        "inputs": "Entity/tier/version IDs + values",
        "output": "Change record + exact arithmetic",
        "permission": "Read-only; validated units and dates"
      },
      {
        "name": "retrieve_history",
        "inputs": "Event/entity/question",
        "output": "Prior evidence and reports",
        "permission": "Tenant-scoped historical retrieval"
      },
      {
        "name": "deliver_approved_briefing",
        "inputs": "Edition/action version + recipient + stable action key",
        "output": "Delivery receipt/status",
        "permission": "Current authorized destination; version-bound approval when required; deduplication, receipt, and reconciliation"
      }
    ],
    "evals": [
      {
        "case": "Yesterday’s event is republished today.",
        "expected": "Classify it as existing or updated, preserving both dates. Replaying the inbox event or timer occurrence must not create a fresh notification intent.",
        "measure": "Stale-item, duplicate-event, and duplicate-delivery rates"
      },
      {
        "case": "Only navigation changed on the pricing page.",
        "expected": "Record no material price change and finish quietly if that is the user’s notification policy; retain the internal result.",
        "measure": "Useful-alert precision plus audited missed-material-event rate"
      },
      {
        "case": "A source outage and worker crash interrupt a briefing; a later retry encounters an expired approval or uncertain send.",
        "expected": "Preserve coverage gaps and pending work, reject stale worker commits, revalidate approval, and reconcile any uncertain delivery before retrying.",
        "measure": "Recovery time, missed-event rate, duplicate delivery, and unauthorized-action count"
      }
    ],
    "deployment": "Run manually, then shadow the proposed schedule, then enable authorized delivery with durable state and an owner. Following Anthropic’s always-on architecture, route timers, webhooks, and approval replies through an inbox, retain selective memory, and keep credentials behind trusted permission checks. Our proposed implementation adds tenant-scoped event identities, worker leases/fencing, bounded retries, and an optional transactional outbox. Test replay, expired approval, lost send receipts, and missed alerts. The starter supplies retrieval/API/MCP mechanics; the scheduler, inbox worker, collection, snapshot comparison, approval UI, and delivery are implementation work.",
    "repeatable": "Reuse profile, timer, inbox event, task memory, snapshot, briefing, approval, and delivery records. Configure watchlists, relevance rules, freshness, timezone, and destination per customer. Partition execution and retrieval by tenant; one active worker per inbox still permits parallel independent inboxes. Separate domain interpretation from shared event processing.",
    "metric": "Primary: timely, useful material changes with low missed-event rates. Supporting: factual support, duplicate/stale rates, reading and review time, delivery success, and cost per useful briefing.",
    "sources": [
      {
        "title": "Anthropic · Building always-on agents",
        "url": "https://claude.com/resources/articles/building-always-on-agents"
      },
      {
        "title": "Akshay Pachaar · Always-on agents explainer",
        "url": "https://x.com/akshay_pachaar/status/2122319449969803508"
      },
      {
        "title": "Temporal · Durable workflow execution",
        "url": "https://docs.temporal.io/workflow-execution"
      },
      {
        "title": "Anthropic · Long-running harnesses",
        "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
      },
      {
        "title": "Anthropic · Agent evaluations",
        "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
      }
    ]
  }
};
