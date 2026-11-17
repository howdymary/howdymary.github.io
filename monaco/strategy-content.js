/* Interview strategy content: verified public sources, user-note interpretations, and explicitly hypothetical practice cases. */
window.STRATEGY_CONTEXT = {
  "title": "Your Monaco interview notes, made operational",
  "attribution": "The guide separates three kinds of material: verified statements from Monaco’s public website and blog, the user’s interview notes, and our proposed practice designs. Public company statements describe Monaco’s account of its own system; hypothetical cases and proposed roadmaps are not disclosures of its internal interview rubric or strategy.",
  "unresolved": [
    {
      "id": "three-part-roadmap",
      "text": "Official-site and blog research did not verify the three specific roadmap parts. Monaco publicly describes a layered build sequence, which is distinct from the proposed three-stage practice framework below."
    },
    {
      "id": "enterprise-pull",
      "text": "The reviewed pages support enterprise-software architecture themes, but did not verify a specific natural-pull-from-large-companies strategy. Monaco’s homepage currently positions it as a revenue engine for startups. Keep the enterprise-expansion note attributed to the interview context."
    }
  ],
  "proposedRoadmap": {
    "label": "Practice framework — not Monaco's stated roadmap",
    "parts": [
      "Prove a narrow customer outcome",
      "Generalize a repeated workflow across customers",
      "Add the enterprise capabilities justified by repeatable demand"
    ]
  },
  "economics": {
    "label": "Illustrative two-full-service-year cohort model; invented inputs",
    "formula": "wins × annual_revenue × gross_margin + wins × renewal_probability × annual_revenue × gross_margin − incremental_acquisition_and_review_cost − wins × onboarding_cost_per_account",
    "exclusions": "No expansion, price changes, discounting, taxes, shared fixed costs, or partial-year timing. Do not subtract onboarding twice if already included in gross margin.",
    "enterprise": {
      "wins": 10,
      "annualRevenue": 80000,
      "grossMargin": 0.8,
      "renewal": 0.8,
      "acquisitionReviewCost": 100000,
      "onboardingPerAccount": 12000,
      "year1GrossProfit": 640000,
      "year2ExpectedGrossProfit": 512000,
      "contribution": 932000
    },
    "smaller": {
      "wins": 100,
      "annualRevenue": 6000,
      "grossMargin": 0.75,
      "renewal": 0.65,
      "acquisitionReviewCost": 80000,
      "onboardingPerAccount": 500,
      "year1GrossProfit": 450000,
      "year2ExpectedGrossProfit": 292500,
      "contribution": 612500
    },
    "interpretation": "These inputs favor the enterprise cohort. Test different retention, acquisition, delivery, close-timing, and capacity assumptions before choosing a segment. Forecast opportunities require a probability of winning within the horizon; realized wins do not."
  },
  "checkedAt": "2026-11-16",
  "roadmapStatus": "not_publicly_verified",
  "roadmapResolution": "I searched Monaco’s official website and blog, including focused searches for a three-part roadmap and enterprise expansion. I found a detailed public build sequence and several directly relevant engineering principles, but no explicit public statement naming the three roadmap parts from the interview note. The public build sequence is underlying records, identity resolution, shared context, write-time capture, outcome joins and feedback, then increasingly autonomous agents. Keep the three-part note as a clarification item; do not relabel that sequence as three parts.",
  "verifiedFacts": [
    {
      "claim": "Monaco says its domain experts can inspect agent traces, use the same MCP-exposed harness and tools as its agents, edit prompts, and define evaluation rubrics.",
      "title": "Monaco: Principles for Building Effective Vertical AI Products",
      "url": "https://www.monaco.com/blog/principles-of-effective-vertical-ai",
      "sourceDate": "2026-10-30",
      "whyItMatters": "Prepare to show how you translate domain judgment into tools, cases, prompt changes, and evaluations. Universal access in this article concerns internal builders; it does not establish unrestricted production-agent authority.",
      "evidence": "“Experts own the evals.”"
    },
    {
      "claim": "Monaco describes organizational memory as a write-time problem: capture resolved identities, decisions, context, and timestamps when work happens so later outcomes can be joined back to those actions.",
      "title": "Monaco: A System of Intelligence for Revenue",
      "url": "https://www.monaco.com/blog/a-system-of-intelligence-for-revenue",
      "sourceDate": "2026-09-09",
      "whyItMatters": "An interview answer should specify what the system records before an outcome exists, not only how it retrieves information after the fact.",
      "evidence": "“organizational memory is not primarily a retrieval problem. It is a write-time problem.”"
    },
    {
      "claim": "Monaco Memory separates organization-wide context from individual user preferences and uses human-readable, versioned Markdown. Its update mechanisms include event-triggered consideration and scheduled reflection with candidate consolidation.",
      "title": "Monaco: How We Built Monaco Memory",
      "url": "https://www.monaco.com/blog/design-monaco-memory-for-sales-agents",
      "sourceDate": "2026-09-30",
      "whyItMatters": "Explain memory scope, authority, freshness, correction, and how candidate observations become persistent context.",
      "evidence": "“Monaco Memory has two form factors: organization memory and user memory.”"
    },
    {
      "claim": "Monaco’s CRM-update guidance proposes provenance for writes, precedence for human edits, permissions based on the cost of mistakes, and field-level reversibility.",
      "title": "Monaco: Can You Trust an AI Agent to Update Your CRM?",
      "url": "https://www.monaco.com/blog/ai-agent-crm-updates",
      "sourceDate": "2026-09-20",
      "whyItMatters": "Describe field-specific policies and a workable review queue instead of one blanket approval rule for all updates.",
      "evidence": "“a human edit always wins and pins the field”"
    },
    {
      "claim": "Monaco’s debugging article describes two investigations corrected by new evidence: inspecting the actual child process and discovering a missing query filter during API pagination.",
      "title": "Monaco: When AI Gets Desperate",
      "url": "https://www.monaco.com/blog/when-ai-gets-desperate",
      "sourceDate": "2026-09-04",
      "whyItMatters": "Treat plausible explanations as hypotheses. Inspect the actual execution boundary and test pagination assumptions with a new observation.",
      "evidence": "“Revisit the foundation.”"
    },
    {
      "claim": "Monaco’s build-versus-buy article evaluates the cost of trying a vendor, the team’s understanding of the problem, and the opportunity to consolidate workflows; it leaves open a future switch back to a vendor.",
      "title": "Monaco: Build or Buy? SRE Tools and Slack Bots",
      "url": "https://www.monaco.com/blog/build-or-buy-sre-tools-and-slack-bots",
      "whyItMatters": "Defend build-versus-buy using measured integration effort, context, maintainability, and economics rather than ideology.",
      "evidence": "“Is experimenting with the vendor actually cheap?”"
    },
    {
      "claim": "Monaco’s current homepage positions the product as a revenue engine for startups. The broader enterprise-sales discussion in this guide is an interview exercise informed by the user’s notes.",
      "title": "Monaco homepage",
      "url": "https://www.monaco.com/",
      "whyItMatters": "Separate public positioning from hypotheses about future segments or internal roadmap priorities.",
      "evidence": "“The best startups run sales on Monaco.”"
    }
  ]
};

window.STRATEGY_MODULES = [
  {
    "id": "vertical-harness",
    "title": "Design the vertical harness",
    "note": "Harness; vertical harness ingredients; systems thinking; agents are effective when they have useful tools.",
    "concept": "A harness is the surrounding application that turns a model’s proposed actions into controlled execution. A vertical harness adds the domain’s data, workflows, vocabulary, constraints, integrations, and definition of success. Start by mapping the whole operating system: who requests work, which facts are available, which decisions need judgment, which actions change the world, and who accepts the result. The model is one component in that system.",
    "example": "For an enterprise-sales researcher, the domain layer includes account ownership, ideal-customer criteria, product capabilities, buying signals, opportunity stages, and approved outreach rules. The execution layer supplies CRM reads, company research, retrieval, draft creation, durable run state, approvals, budgets, retries, and traces. A useful output might be a rep-accepted account plan with supported facts and a relevant demo—not merely a long research summary.",
    "decision": "Use model judgment to interpret ambiguous evidence and choose the next useful investigation. Use code to enforce identity, access, schemas, budgets, exclusions, and action limits. Add domain-specific rules only when they represent a real invariant or a measured recurring need.",
    "explain30": "I think of a vertical harness as the operating environment around the model. It combines the industry’s data and workflow with the tools, state, controls, and evaluations needed to finish a real job. I’d start by defining an accepted outcome, then work backward to the evidence and actions the agent needs.",
    "explain120": "I would draw three layers. The domain layer describes the customer’s entities, workflow, and what a good result looks like. The capability layer exposes reliable tools and source access. The execution layer manages state, permissions, failures, budgets, and observation. The model handles interpretation and chooses among allowed actions. For enterprise sales, I would trace one account from intake through research, qualification, product matching, a reviewed demo draft, and eventual opportunity outcome. At each transition I would identify the source of truth, the rule or judgment being applied, and the evidence that the next stage is justified. Then I would choose the smallest valuable slice, establish a baseline, and evaluate its output before increasing autonomy.",
    "whiteboard": "Customer objective → domain contract → evidence + tools → bounded model loop → validation + review → accepted artifact → delayed business outcome. Draw a surrounding box labeled identity, state, budgets, recovery, and traces.",
    "followups": [
      {
        "q": "Is the harness just a system prompt?",
        "strong": "The prompt communicates task instructions. The harness also implements execution, permissions, persistence, tool contracts, recovery, budgets, and logs. A prompt cannot by itself enforce those boundaries.",
        "weak": "Yes, it is a really detailed prompt with instructions to be careful."
      },
      {
        "q": "Which ingredients are reusable across industries?",
        "strong": "Run state, tool dispatch, permission checks, evidence provenance, review queues, and evaluation infrastructure often recur. Entity schemas, source adapters, workflow rules, and outcome definitions are more domain-specific.",
        "weak": "Every industry needs an entirely separate agent, or one generic agent can handle everything unchanged."
      }
    ],
    "exercise": "Sketch your agent without naming any model vendor. Label the domain data, decisions, tool permissions, state, handoffs, and accepted outcome. Identify one part that must be code and one part where model judgment is useful.",
    "deliverable": "A one-page vertical-harness architecture and a narrated trace of one task.",
    "sources": [
      {
        "title": "Anthropic: building effective agents",
        "url": "https://www.anthropic.com/engineering/building-effective-agents"
      },
      {
        "title": "Monaco product context",
        "url": "https://www.monaco.com/product"
      },
      {
        "title": "Monaco: Principles for Building Effective Vertical AI Products",
        "url": "https://www.monaco.com/blog/principles-of-effective-vertical-ai"
      }
    ]
  },
  {
    "id": "domain-data",
    "title": "Turn industry and account data into usable evidence",
    "note": "Industry data; prospect and company data; enrichments; table data.",
    "concept": "A data model describes the entities, relationships, and fields your workflow depends on. Enrichment adds information from another source; it does not make that information automatically true or current. Tabular data needs explicit row identity, units, dates, join keys, provenance, and permission boundaries. Distinguish a company, a person, a location, an opportunity, and an observed event before combining their records.",
    "example": "An account table can use a stable account_id and normalized domain. Separate contact records, opportunity records, and evidence records refer to that ID. An enrichment might report 120 employees as of a date while a public company page suggests 90. Keep the observations, their dates, and sources instead of silently overwriting one with the other. For a cake shop, a business can have several locations; treating every location as a different company can create duplicate outreach and misleading conversion rates.",
    "decision": "Define the minimum fields needed for the next decision. Choose a source-of-truth and conflict policy per field. Use authoritative system IDs when available, deterministic joins where possible, and review uncertain entity matches. Treat missing data as unknown. Re-fetch time-sensitive fields before consequential use.",
    "explain30": "I’d make the agent’s data contract explicit. Every important field needs an entity, source, timestamp, and meaning. Enrichment is an observation to evaluate, not a fact to trust blindly. That matters because incorrect joins or stale fields can make a fluent agent act on the wrong account.",
    "explain120": "I would start with the entities the workflow actually uses: accounts, contacts, opportunities, activities, and evidence. I would define stable identifiers and which system owns each field. Then I would add source observations with publication or effective dates where known, retrieval time, and provenance. If two sources conflict, the policy might favor the customer’s CRM for account ownership and a current official product page for a capability, while flagging an uncertain employee count. I would keep facts separate from inferred signals and compute table-based metrics using code. Before the model sees data, the application applies tenant and access rules. My tests would cover duplicate companies, subsidiaries, missing contacts, stale records, inconsistent currency or units, and conflicting sources.",
    "whiteboard": "Account(account_id, domain) ← Contact(contact_id, account_id) → Activity; Account → Opportunity(opportunity_id, stage, amount, currency); Evidence(evidence_id, entity_id, claim, source, observed_at, valid_at, permissions).",
    "followups": [
      {
        "q": "Why not give the model a huge spreadsheet?",
        "strong": "A model can inspect a table, but the application still needs schema, joins, row identity, permissions, and deterministic calculations. I would retrieve or query the relevant subset and preserve provenance.",
        "weak": "The context window is large enough, so data modeling is unnecessary."
      },
      {
        "q": "What do you do when enrichment conflicts with CRM data?",
        "strong": "I compare source authority, field ownership, timestamps, and the consequence of an error. I preserve both observations and escalate consequential uncertainty rather than overwrite blindly.",
        "weak": "Use whichever value the model sounds most confident about."
      }
    ],
    "exercise": "Design five rows for an account table and a separate evidence table. Include one duplicate domain, one unknown CRM, one stale signal, and one conflicting employee count. State how each case should behave.",
    "deliverable": "An entity schema, source-priority rules, and four data-quality regression cases.",
    "sources": [
      {
        "title": "Microsoft: document-level access controls",
        "url": "https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview"
      },
      {
        "title": "Monaco: How We Built Monaco Memory",
        "url": "https://www.monaco.com/blog/design-monaco-memory-for-sales-agents"
      },
      {
        "title": "Monaco: A System of Intelligence for Revenue",
        "url": "https://www.monaco.com/blog/a-system-of-intelligence-for-revenue"
      },
      {
        "title": "Monaco: Can You Trust an AI Agent to Update Your CRM?",
        "url": "https://www.monaco.com/blog/ai-agent-crm-updates"
      }
    ]
  },
  {
    "id": "tool-access",
    "title": "Give the agent the right tools—and decide what to buy",
    "note": "Full tool access; agents are only effective with tools; referencing buying tools.",
    "concept": "Tool access should cover the actions necessary to complete the authorized workflow. It does not mean unrestricted access to every system. A useful tool has a precise contract: inputs, outputs, permissions, side effects, error states, limits, and an owner. A direct API adapter, an SDK, or an MCP server can expose a capability; the harness still decides which calls are allowed. Buy-versus-build is a decision about coverage, reliability, economics, and differentiation. Monaco’s public principle of universal tool access specifically describes giving its internal domain experts frontier models and the same MCP-exposed harness and tools used by agents. That organizational access helps experts build and evaluate workflows; runtime authorization still needs its own design.",
    "example": "An account-research pilot may need CRM reads, licensed contact enrichment, approved web research, product-document retrieval, and a draft-saving tool. A sending capability can remain outside the research loop. When evaluating an enrichment provider, inspect match quality on your actual accounts, freshness, source provenance, permitted uses, API coverage, latency, limits, exportability, and failure behavior. A polished demo or a large advertised database is insufficient evidence of workflow fit.",
    "decision": "Buy commodity capabilities when they meet your requirements and save meaningful work. Build the customer-specific decision logic, evidence policies, and workflow integration where they create value. Compare total cost including API fees, human review, operations, and switching—not only a subscription price. Keep tool permissions narrow even when the agent has broad research capabilities.",
    "explain30": "I want complete access to the capabilities the task needs, with limited authority for each action. I’d usually buy reliable commodity data or infrastructure and build the workflow logic that differentiates the product. The decision comes from tested coverage, quality, and total operating cost.",
    "explain120": "I would begin with a capability map rather than a list of vendors. For each step I would ask which system can supply the needed evidence or action and whether it exposes a stable interface. I would define a small tool contract, distinguish reads from writes, and make errors observable. Then I would test potential providers on a representative customer sample. I would measure successful matches, freshness, latency, error recovery, and review burden, and check whether the usage terms fit the application. I would use a direct API when a focused integration is sufficient and MCP when standardized tool discovery and reuse across compatible hosts has practical value. Neither option replaces authorization, validation, or evaluations.",
    "whiteboard": "Workflow step → required capability → buy/build decision → API/SDK/MCP adapter → permission + schema gate → execution → typed result or typed error.",
    "followups": [
      {
        "q": "The interviewer says the agent needs full tool access. Do you agree?",
        "strong": "It needs sufficient capability coverage to finish its task. I would clarify the required actions, then grant the minimum authority needed for each. Reading a CRM and sending a campaign should be separate permissions.",
        "weak": "Give it admin credentials so it can figure everything out."
      },
      {
        "q": "When would you replace a purchased tool?",
        "strong": "When measured quality, missing capability, reliability, cost at scale, or strategic dependence makes building or switching worthwhile. I would include migration and operating cost in the comparison.",
        "weak": "We should build every tool because that looks more technically impressive."
      },
      {
        "q": "What does Monaco mean publicly by universal tool access?",
        "strong": "Its article describes internal domain experts using the same harness and MCP tools as agents, along with trace access and editable prompts. I would distinguish that builder enablement from the permissions an individual production action receives.",
        "weak": "It means every agent should have administrator access to every customer system."
      }
    ],
    "exercise": "Create a capability matrix with five tools. For each, specify buy/build, API or MCP interface, read/write authority, expected output, and a test for failure.",
    "deliverable": "A tool inventory with contracts and an evidence-based procurement decision.",
    "sources": [
      {
        "title": "Monaco: Principles for Building Effective Vertical AI Products",
        "url": "https://www.monaco.com/blog/principles-of-effective-vertical-ai"
      },
      {
        "title": "Monaco: Build or Buy? SRE Tools and Slack Bots",
        "url": "https://www.monaco.com/blog/build-or-buy-sre-tools-and-slack-bots"
      }
    ]
  },
  {
    "id": "outcome-loop",
    "title": "Capture the right outcome at the right time",
    "note": "Capturing the outcome at the right time; end result; a good outcome; evaluation; throughput; revenue; how to measure success.",
    "concept": "An operational metric describes what the system did. A quality metric describes whether the work was useful or correct. A business outcome describes the effect on the customer’s objective. Connect all three through stable task, account, and cohort identifiers. Measure outcomes at the point where they are meaningful: a draft can be accepted today, an opportunity can qualify later, and revenue or renewal may arrive months afterward.",
    "example": "For a sales workflow, track researched account → reviewer acceptance → relevant conversation → held qualified meeting → accepted opportunity → closed deal → retained customer. Each transition needs a definition, event timestamp, denominator, and owner. Define throughput as accepted useful outputs per unit time, with review and rework included. More generated emails can coexist with lower pipeline quality. For daily intelligence, delivery success is operational; supported material changes and useful decisions are quality and business signals.",
    "decision": "Choose one primary customer outcome, a few leading indicators, and guardrail metrics. Preserve collection and event dates, account for outcome lag, and compare mature cohorts. Evaluate a controlled pilot where feasible; avoid attributing a before/after change entirely to the agent when targeting, staffing, or market conditions also changed.",
    "explain30": "I’d measure the chain from agent behavior to customer value. Early on, I can observe evidence quality, accepted outputs, and review time. Later, I connect those same accounts to qualified opportunities, revenue, and retention. The right metric includes a clear denominator and the time needed for the outcome to mature.",
    "explain120": "First I would agree on what success means with the customer. For a research agent, I might track supported recommendations and whether reps actually use them; for a sales deployment, the longer-term outcome could be qualified pipeline or retained gross profit. I would instrument the transitions using task and account IDs so I can connect a generated artifact to a reviewed action and eventual result. I would distinguish the event date from the date the system learned about it. Then I would define cohorts and avoid comparing newly contacted accounts with fully matured historical ones. A pilot should include a baseline or a comparable control group when practical. I would watch quality and operational guardrails, because faster output is not valuable if review burden, false claims, or customer complaints rise.",
    "whiteboard": "Agent trace → accepted artifact → customer action → business event → delayed retention outcome; attach task_id, account_id, cohort, event_at, observed_at, and metric definition to every transition.",
    "followups": [
      {
        "q": "Replies rose 40%, but opportunities did not. Is the agent successful?",
        "strong": "Not on a pipeline objective yet. I would inspect reply intent, account fit, meeting quality, follow-up, cohort maturity, and downstream conversion before scaling volume.",
        "weak": "Yes, more replies prove the agent works."
      },
      {
        "q": "How do you know the agent caused the improvement?",
        "strong": "I would use a controlled comparison when feasible, check comparable cohorts and outcome windows, and report uncertainty and other changes. Observed improvement alone does not establish causation.",
        "weak": "The numbers went up after launch, so the agent caused it."
      }
    ],
    "exercise": "Write a metric contract for one agent: numerator, denominator, unit, cohort, event time, observation window, data source, owner, and acceptable failure rate. Add one metric that could improve while the business gets worse.",
    "deliverable": "A measurement tree and an event schema that connects short-term evaluations to delayed outcomes.",
    "sources": [
      {
        "title": "Anthropic: agent evaluations",
        "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
      },
      {
        "title": "Monaco: A System of Intelligence for Revenue",
        "url": "https://www.monaco.com/blog/a-system-of-intelligence-for-revenue"
      },
      {
        "title": "Monaco: Principles for Building Effective Vertical AI Products",
        "url": "https://www.monaco.com/blog/principles-of-effective-vertical-ai"
      }
    ]
  },
  {
    "id": "deal-economics",
    "title": "Compare deal quality, capacity, and retention",
    "note": "Ten big deals versus a hundred small deals; churn; throughput; revenue.",
    "concept": "Deal count is a volume measure. Economic value depends on revenue per account, gross margin, probability and timing of winning, implementation cost, service capacity, concentration, and retention. Ten large deals can outperform a hundred small ones under one set of assumptions and underperform under another. A larger contract is not automatically a better customer.",
    "example": "Illustrative two-year cohort: 10 won enterprise accounts at $80,000 annual revenue and 80% gross margin generate $640,000 first-year gross profit. At 80% renewal probability, expected second-year gross profit is $512,000. Subtract $100,000 incremental acquisition/review cost and $120,000 onboarding cost for $932,000 simplified two-year contribution. For 100 won small accounts at $6,000, 75% gross margin, and 65% renewal probability, the corresponding gross profits are $450,000 and $292,500. Subtract $80,000 acquisition/review and $50,000 onboarding for $612,500. These are invented inputs, assume comparable full service years, and exclude expansion, discounting, taxes, and many fixed costs.",
    "decision": "First compare like-for-like cohorts and definitions. Separate realized wins from forecast wins. If forecasting, apply the probability of winning within the selected horizon and check whether delivery capacity can support those wins. Do not count onboarding twice if it is already in gross margin. Test sensitivity to renewal, implementation effort, and sales-cycle delay.",
    "explain30": "I would optimize for valuable, retained customer outcomes, not raw deal count. I’d compare expected revenue and gross profit with acquisition, review, onboarding, and support effort. I’d also account for sales-cycle timing and retention, because ten large contracts that close late or churn quickly may be worse than a repeatable smaller segment.",
    "explain120": "I would first ask whether the numbers refer to prospects, opportunities, signed contracts, or retained customers. Then I would normalize the comparison to the same horizon. For signed customers, I can compare revenue, gross margin, onboarding effort, and expected retention. For opportunities, I also need the probability of a win within that horizon. I would model operational capacity because an attractive enterprise segment can overwhelm a small implementation team. I would show a base case and sensitivity analysis rather than one precise-looking forecast. If the agent increases throughput, I want to know whether that creates more accepted opportunities, improves conversion, or frees humans to work on higher-value deals. I would also inspect concentration and customer fit: one large account can generate revenue while pulling the product into expensive bespoke work.",
    "whiteboard": "Eligible opportunities × P(win within horizon) → wins; wins × annual revenue × gross margin → service-year gross profit; renewal + onboarding + review + capacity → contribution and risk.",
    "followups": [
      {
        "q": "So are ten big deals better than a hundred small deals?",
        "strong": "Only under explicit assumptions about size, margin, close probability, timing, capacity, and retention. I would compare expected contribution and strategic fit, then test the assumptions most likely to change the decision.",
        "weak": "Always. Larger deal size is the only important metric."
      },
      {
        "q": "How would churn change the agent’s objective?",
        "strong": "I would bring retention and product fit into the outcome loop. Optimizing acquisition alone can select customers that close easily but do not succeed. Renewal is a delayed signal and must be analyzed by mature cohort.",
        "weak": "Churn is a customer-success problem, so the acquisition agent should ignore it."
      }
    ],
    "exercise": "Change the enterprise renewal assumption, onboarding cost, and close timing until the preferred segment changes. Explain which assumption you would validate first and what evidence would resolve it.",
    "deliverable": "A transparent cohort model, a sensitivity analysis, and a statement of excluded costs and uncertainty."
  },
  {
    "id": "enterprise-workflows",
    "title": "Automate long-running enterprise work",
    "note": "Monaco for enterprise sales; automating long-running workflows; natural pull from large companies.",
    "concept": "An always-on agent can sleep between short runs while its workflow spans days, tools, approvals, and external events. Anthropic’s guide describes five surrounding primitives: a durable event inbox, timers, persistent memory, permissions, and an outbox or delivery decision. A new session assembles memory and events; an existing session may resume its transcript. This is general agent architecture, not a claim about Monaco’s implementation. Enterprise interest is a discovery signal, not proof that every requested feature should be built.",
    "example": "A prospect reply enters an inbox rather than starting an uncoordinated model call. One active worker for that inbox claims the event, loads the account’s task record and relevant evidence pointers, and prepares a demo update. A risky send waits for review. The reply to that approval becomes a new event that resumes work. A follow-up timer also enqueues an event. The run can deliver a useful result, ask for permission, or finish quietly. Each transition retains its evidence and action identity.",
    "decision": "Proposed implementation: partition inboxes by tenant and user, deduplicate source event IDs, and use expiring worker leases with fencing/version checks. Commit workflow state and an intended outbox record together when reliable dispatch is required; a separate outbox is an implementation choice. Revalidate approvals against the action version, recipient, expiry, and current authority. Use stable action keys, provider idempotency where supported, and reconciliation for uncertain writes. A durable inbox does not guarantee exactly-once external effects.",
    "explain30": "Always-on means available to respond, not continuously thinking. I would wrap short agent runs in a durable inbox, timers, memory, permissions, and a delivery policy. Events wake the workflow; state survives restarts; approval replies resume it. I would test duplicate events, stale approvals, uncertain writes, and whether its notifications are useful.",
    "explain120": "I would trace one account through events and state. Webhooks, scheduled occurrences, and user replies first enter a durable inbox. One active worker owns that inbox at a time; other inboxes can run independently. Timers enqueue events instead of bypassing the same path. A new session loads selected memory and task progress, while an existing one may resume its transcript. I would keep pointers to facts I can retrieve again and persist decisions or progress that must survive context loss. The model proposes actions, but trusted code checks scope and supplies credentials. A deferred action can wait for a human, then resume from the approval event. My implementation would bind approval to the exact action version and recheck expiry and current authority. Inbox processing may be retried, so I would distinguish duplicate input handling from external delivery: stable action IDs, provider idempotency where available, and reconciliation handle uncertain sends. A formal outbox is useful for paced, recoverable dispatch but is not mandatory for every design. Finally, I would measure useful notifications and missed material events alongside completion, recovery effort, and business outcomes.",
    "whiteboard": "Webhook / user reply / due timer → durable inbox → one active worker per inbox → short agent run → persist progress → deliver / stay quiet / await approval\nMemory + evidence pointers feed each run; trusted permission checks guard tool actions.\nApproval replies and follow-up timers loop back to the inbox.\nProposed reliability layer: scoped event IDs, worker leases + fencing, action ledger, optional transactional outbox, operator recovery.",
    "followups": [
      {
        "q": "Does always-on mean the model is running continuously?",
        "strong": "No. The durable application waits, and events trigger bounded work. An existing session may resume its transcript; a new session reconstructs relevant context from memory and events. Availability comes from the surrounding system.",
        "weak": "Keep the chat open and give the model a larger context window."
      },
      {
        "q": "Does deduplicating the inbox guarantee that an email is sent exactly once?",
        "strong": "No. Input deduplication and external effects are different boundaries. A crash after provider acceptance can leave delivery uncertain. Preserve the original action key, use provider idempotency where supported, and reconcile before retrying.",
        "weak": "A unique inbox event means retries can never duplicate a send."
      },
      {
        "q": "What if two workers overlap, or an approval becomes stale?",
        "strong": "My proposed design uses tenant-scoped claims, expiring leases, and fencing/version checks so an old worker cannot commit after ownership changes. Approval is tied to action arguments and version, recipient, scope, and expiry; changed work or authority requires revalidation.",
        "weak": "A single-worker setting and a previous approval should be enough."
      },
      {
        "q": "Should the agent notify the user after every run?",
        "strong": "No. A run can finish without a message. Tune materiality and notification pacing against both useful-alert precision and missed-important-event rate, while retaining an internal audit trail.",
        "weak": "More updates demonstrate that the agent is working."
      }
    ],
    "exercise": "Draw a prospect-reply event, a follow-up timer, and a deferred approval entering the same inbox. Inject a worker crash after an external send and change the draft while approval is pending. Explain recovery, approval invalidation, and when the user hears nothing.",
    "deliverable": "A five-primitive architecture, tenant-scoped event/action ledger, and replay + stale-approval recovery cases.",
    "sources": [
      {
        "title": "Anthropic: Building always-on agents",
        "url": "https://claude.com/resources/articles/building-always-on-agents"
      },
      {
        "title": "Akshay Pachaar: always-on agents explainer",
        "url": "https://x.com/akshay_pachaar/status/2122319449969803508"
      },
      {
        "title": "Anthropic: harnesses for long-running agents",
        "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
      },
      {
        "title": "Monaco product context",
        "url": "https://www.monaco.com/product"
      },
      {
        "title": "Monaco: A System of Intelligence for Revenue",
        "url": "https://www.monaco.com/blog/a-system-of-intelligence-for-revenue"
      },
      {
        "title": "Monaco: Can You Trust an AI Agent to Update Your CRM?",
        "url": "https://www.monaco.com/blog/ai-agent-crm-updates"
      }
    ]
  },
  {
    "id": "conversion-creativity",
    "title": "Use a cake shop to test first-principles conversion thinking",
    "note": "Local cake shops; buying tools; out-of-the-box thinking on conversions; similar patterns across industries.",
    "concept": "Conversion is a transition toward a useful customer outcome. It can fail because of poor fit, missing information, slow response, friction, lack of trust, capacity limits, or weak follow-through. Creative agent ideas should address a diagnosed bottleneck. A cake-shop example is useful because its real constraints—occasion, date, budget, availability, dietary needs, and fulfillment—make vague automation ideas concrete.",
    "example": "A fictional cake shop gets many website inquiries but loses customers before a confirmed order. Instead of assuming it needs more ad traffic, inspect response time, whether occasion/date information is complete, how quotes are prepared, and whether production capacity is available. A first agent could gather the missing details, retrieve approved offerings, prepare an accurate quote draft, and route it to staff. A personalized demo can show a synthetic birthday inquiry progressing through that flow. Allergy or dietary questions should use reviewed product information and human confirmation; do not invent assurances.",
    "decision": "Find the bottleneck before choosing the tool. Buy existing booking, payment, or messaging capabilities when they meet the need, then connect the workflow thoughtfully. Measure qualified inquiry-to-confirmed-order conversion, response time, contribution per order, cancellation, and fulfillment quality. Preserve capacity checks so increased demand does not create unfulfillable orders.",
    "explain30": "I’d start with the customer’s decision and the shop’s operational constraints. If inquiries are already arriving, the opportunity might be faster, more accurate quotes or better follow-up rather than more traffic. I’d build a small workflow around that bottleneck and measure confirmed, successfully fulfilled orders.",
    "explain120": "I would map the full journey: discovery, inquiry, qualification, quote, confirmation, payment, production, and repeat purchase. Then I would identify where suitable customers drop out and why. A research-and-quote assistant could gather the occasion, date, party size, and budget, retrieve approved options, check capacity, and draft a response for staff. The demo should use synthetic customer information and accurately represent what the system can do. I would compare the pilot with a baseline and include cancellations, errors, review effort, and fulfillment constraints. The same structure transfers to enterprise sales: gather requirements, establish fit, match supported capabilities, propose the next step, and observe the eventual outcome. The domain rules change; the pattern can recur.",
    "whiteboard": "Occasion + date + budget → qualify → approved catalog + capacity → tailored quote → staff approval → confirmed order → fulfillment → repeat purchase. Under each arrow: friction, evidence, owner, and outcome event.",
    "followups": [
      {
        "q": "What is the unconventional conversion opportunity?",
        "strong": "I would look for a specific overlooked friction, such as unanswered capacity questions, slow quote preparation, or a poorly timed follow-up. I would test it; novelty alone is not value.",
        "weak": "Generate more personalized messages because personalization always converts."
      },
      {
        "q": "How does this transfer to enterprise sales?",
        "strong": "Both require qualification, evidence collection, matching needs to actual capabilities, coordination, and delayed outcome tracking. The regulatory, stakeholder, and fulfillment constraints differ.",
        "weak": "A cake shop and enterprise sales are identical, so the same prompt works unchanged."
      }
    ],
    "exercise": "Choose three possible reasons inquiries fail to convert. For each, name the evidence you would collect, a small intervention, and a metric that could disprove your hypothesis.",
    "deliverable": "A bottleneck map and a synthetic end-to-end demo storyboard that changes the workflow, not only the logo."
  },
  {
    "id": "repeatable-platform",
    "title": "Find the repeatable pattern across customers",
    "note": "Repeatable across multiple customers; similar patterns across industries; roadmap has three parts; natural pull from large companies; AI-native platform.",
    "concept": "Productization separates reusable infrastructure, configurable domain behavior, and genuinely bespoke work. Repeated customer requests are evidence to investigate, not automatic roadmap commitments. An AI-native design can reorganize work around evidence, decisions, and delegated execution, but it still needs coherent data, interfaces, human responsibility, and reliable operations. Official-site research did not verify the three roadmap parts mentioned in the interview note. Monaco does publicly describe a layered build sequence; keep that source-backed architecture separate from our proposed practice roadmap.",
    "example": "Across several sales customers, research, qualification, capability matching, draft review, and outcome capture may recur. Reuse the harness, evidence schema, adapters, and evaluation machinery; configure the ideal-customer criteria, approved claims, and workflow rules. For practice only, a proposed three-stage roadmap could be: prove one narrow customer outcome, generalize a repeated workflow across customers, and add the enterprise controls needed for wider adoption. This is our exercise framework, not Monaco's stated roadmap.",
    "decision": "Look for repeated jobs, shared data structures, stable decision patterns, and similar failure modes. Track implementation effort and time to value for each customer. Invest in a reusable capability when it reduces repeated work without hiding meaningful differences. Keep the actual three-part Monaco roadmap as a question to clarify. The public build-order article supplies useful architecture evidence but does not establish the three named parts.",
    "explain30": "I’d look for a recurring customer job and separate the common engine from configuration and custom work. Large-customer demand is valuable evidence, but I’d test whether the need repeats and whether we can deliver it economically. I wouldn’t invent the company’s three-part roadmap from an incomplete note.",
    "explain120": "I would compare several customer workflows side by side: their inputs, entities, decisions, tools, approvals, and outcomes. Then I would classify each implementation element as reusable platform, configurable policy, or bespoke integration. A reusable platform might provide evidence storage, orchestration, approvals, traces, and evaluation; customers supply their criteria and source mappings. I would track onboarding effort, activation, adoption, maintenance, and economic results to see whether repetition is actually improving delivery. Enterprise pull can reveal important capabilities such as access control or auditability, but a large contract can also create costly one-off work. For planning practice I can propose phased investments, while clearly separating that proposal from Monaco's actual roadmap, which I would confirm with the interviewer.",
    "whiteboard": "Customer A / B / C workflows → repeated job and failure patterns → shared engine | configurable policy | bespoke adapter → adoption + time-to-value feedback → roadmap decision.",
    "followups": [
      {
        "q": "How do you avoid becoming a consulting business?",
        "strong": "Measure repeated implementation work and deliberately turn proven common pieces into configuration, adapters, or platform capabilities. Keep visibility into bespoke maintenance and margin.",
        "weak": "Call every custom project a platform feature."
      },
      {
        "q": "What are Monaco's three roadmap parts?",
        "strong": "I searched Monaco’s public website and blog. I found its layered build order and vertical-AI principles, but could not verify the three named parts from my note. I would confirm the names with the interviewer and distinguish them from my own proposed roadmap.",
        "weak": "Confidently invent three plausible pillars and present them as company strategy."
      }
    ],
    "exercise": "Compare the three guide blueprints. Mark five shared components, three configuration differences, and three domain-specific constraints. Propose a reusable capability and explain the evidence that would justify building it.",
    "deliverable": "A reuse matrix and a proposed roadmap explicitly labeled as an interview exercise.",
    "sources": [
      {
        "title": "Monaco product context",
        "url": "https://www.monaco.com/product"
      },
      {
        "title": "Monaco: Principles for Building Effective Vertical AI Products",
        "url": "https://www.monaco.com/blog/principles-of-effective-vertical-ai"
      },
      {
        "title": "Monaco: A System of Intelligence for Revenue",
        "url": "https://www.monaco.com/blog/a-system-of-intelligence-for-revenue"
      }
    ]
  },
  {
    "id": "ad-revenue",
    "title": "Scope a large advertising-revenue opportunity",
    "note": "Ad revenue would be a huge project; systems thinking; thinking big; conversion.",
    "concept": "Advertising revenue spans a large system: demand, targeting, creative, auction or placement mechanics, conversion, attribution, billing, and retention. An agent's plausible recommendation is not evidence of incremental revenue. Decompose the value chain and choose a measurable boundary. Budget-changing and publishing actions carry different authority and failure costs from research and recommendations.",
    "example": "A fictional business wants an agent to 'increase ad revenue.' Clarify whether it sells advertising inventory or buys ads to acquire customers; these are different objectives. For an advertiser, a first project might identify creative fatigue and prepare evidence-backed experiment briefs. For a publisher, it might investigate inventory, fill, pricing, and advertiser-retention patterns. Neither project should claim to optimize the whole revenue system on day one.",
    "decision": "Define the economic unit, conversion event, attribution limits, and control group before choosing an optimization loop. Start with analysis and reviewed recommendations. If later allowing campaign changes, use explicit spend limits, approved scopes, rollback, and a separate execution ledger. Measure incrementality where feasible and monitor quality or retention alongside short-term revenue.",
    "explain30": "I’d treat ad revenue as a system of connected decisions, then pick a narrow measurable entry point. First I’d clarify whether we are buying ads or selling inventory. I’d start with evidence-backed recommendations and a controlled experiment before allowing autonomous budget or campaign changes.",
    "explain120": "I would map where value is created and lost: audience or inventory, targeting, creative, delivery, conversion, pricing, billing, and retention. Then I would choose a bottleneck where the data is available and the intervention can be evaluated. For example, an advertiser-facing research agent could detect a pattern of creative fatigue, retrieve the supporting campaign data, and draft a test with a defined audience and outcome. A publisher-facing agent would need a different data model and objective. I would separate observed attribution from incremental impact and account for delayed conversion. I would put spending and publication behind explicit authority, logging, and rollback. The long-term ambition can be broad, while the first deployment supplies evidence about whether the larger opportunity is real.",
    "whiteboard": "Business model → revenue equation → bottleneck → available evidence → narrow intervention → controlled experiment → incremental outcome → bounded expansion.",
    "followups": [
      {
        "q": "Why not let the agent optimize all campaigns immediately?",
        "strong": "The objective, attribution, action authority, and failure costs must be clear first. I would establish a baseline, validate recommendations, and expand to bounded actions with measurable evidence.",
        "weak": "The model can explore until revenue improves."
      },
      {
        "q": "Revenue rose after a recommendation. What else do you check?",
        "strong": "Spend, seasonality, audience changes, conversion lag, margin, retention, and the comparison group. More attributed revenue may simply reflect more spend or a shifted attribution window.",
        "weak": "A revenue increase is sufficient proof of success."
      }
    ],
    "exercise": "Choose advertiser or publisher. Write the revenue equation in plain language, identify one bottleneck, and design a research-only pilot with an explicit expansion gate.",
    "deliverable": "A scoped experiment brief with an outcome metric, attribution limits, action permissions, and a stop condition."
  },
  {
    "id": "five-year-vision",
    "title": "Think five years ahead, then work backward",
    "note": "First principles; how work operates five years from now; build toward it; thinking big.",
    "concept": "First-principles design starts from the job, constraints, and desired outcome rather than copying today's interfaces. Backcasting describes a plausible future operating model, then identifies the capabilities and evidence needed to move toward it. A five-year view is a hypothesis to test, not a prediction to state with certainty.",
    "example": "A possible future sales operating model has people setting objectives, negotiating, and handling exceptions while software maintains evidence, coordinates routine research, prepares relevant experiences, and monitors progress. Work might be organized around goals and state transitions rather than repeated manual entry across tools. To move toward that vision, today's pilot could make one account-research-to-demo workflow reliable and observable, then test whether users actually delegate it.",
    "decision": "Separate enduring needs from uncertain technology assumptions. Preserve modular tools, data contracts, outcome instrumentation, and human ownership so the system can improve as models and interfaces change. Build the smallest capability that both creates current value and tests a consequential assumption about the future.",
    "explain30": "I’d describe a plausible future way of operating, identify what must be true for it to work, and build backward from those requirements. The first deployment should create value now and test a key assumption about that future. Thinking big should make the sequencing clearer.",
    "explain120": "I would begin with the enduring customer job: make good decisions, coordinate work, and produce a valuable outcome. Then I would imagine how that job could be organized if routine research, context gathering, and system updates were dependable delegated capabilities. I would explicitly list assumptions about model quality, tool availability, customer trust, data rights, and economics. Next I would work backward to the capabilities we need: structured domain data, reliable interfaces, stateful execution, evaluations, outcome capture, and understandable human control. The near-term product should test the highest-risk assumption while solving a real problem. I would revisit the vision using adoption and performance evidence, so we keep the ambition while changing the path when the facts change.",
    "whiteboard": "Future operating model → assumptions → enduring capabilities → highest-risk assumption → useful present-day pilot → evidence → revise the path.",
    "followups": [
      {
        "q": "How do you balance ambition and practical execution?",
        "strong": "Tie a specific pilot to an important future capability and a falsifiable assumption. Explain what value it creates now, what it teaches us, and which result would change the roadmap.",
        "weak": "Describe a broad autonomous future without a testable first deployment."
      },
      {
        "q": "What if model capabilities change dramatically?",
        "strong": "Keep business contracts, data provenance, interfaces, and evaluations modular. Re-evaluate model choices against the same tasks rather than making the whole product depend on one model's current behavior.",
        "weak": "Assume the next model will eliminate the need for engineering and evaluation."
      }
    ],
    "exercise": "Write a five-year operating narrative in six sentences. Underline the assumptions. Select one assumption you could test with a two-week pilot and define a result that would falsify it.",
    "deliverable": "A future-state sketch, an assumption ledger, and a pilot linked to a measurable learning goal."
  }
];

window.NOTE_COVERAGE = [
  {
    "note": "Harness",
    "moduleId": "vertical-harness",
    "lesson": "Separate model instructions from the application that executes, persists, controls, and observes work."
  },
  {
    "note": "Vertical harness ingredients",
    "moduleId": "vertical-harness",
    "lesson": "Combine domain data, rules, tools, state, permissions, review, evaluations, and outcome definitions."
  },
  {
    "note": "Industry data",
    "moduleId": "domain-data",
    "lesson": "Model domain entities, authoritative sources, freshness, provenance, and domain-specific constraints."
  },
  {
    "note": "Prospect, company data, enrichments",
    "moduleId": "domain-data",
    "lesson": "Resolve entities, preserve source observations, handle uncertainty, and avoid silently trusting enrichment."
  },
  {
    "note": "Full tool access",
    "moduleId": "tool-access",
    "lesson": "Monaco’s blog describes shared internal builder access to its MCP-exposed harness and tools. Distinguish that enablement from task-specific production permissions."
  },
  {
    "note": "Table data",
    "moduleId": "domain-data",
    "lesson": "Define row identity, join keys, units, dates, permissions, and deterministic calculations."
  },
  {
    "note": "Capturing the outcome at the right time",
    "moduleId": "outcome-loop",
    "lesson": "Connect immediate artifacts to delayed events using IDs, cohorts, event times, and mature observation windows."
  },
  {
    "note": "What's the end result?",
    "moduleId": "outcome-loop",
    "lesson": "Define the accepted artifact and ultimate customer outcome before choosing an agent architecture."
  },
  {
    "note": "What is a good outcome?",
    "moduleId": "outcome-loop",
    "lesson": "Distinguish supported, useful work from merely completed activity."
  },
  {
    "note": "Evaluation",
    "moduleId": "outcome-loop",
    "lesson": "Measure retrieval, answer support, execution, acceptance, and business results separately."
  },
  {
    "note": "Throughput",
    "moduleId": "outcome-loop",
    "lesson": "Measure accepted useful outputs per unit time including review and rework."
  },
  {
    "note": "Revenue",
    "moduleId": "deal-economics",
    "lesson": "Connect qualified activity to comparable economic outcomes, timing, costs, and uncertainty."
  },
  {
    "note": "Ten big deals versus a hundred small deals",
    "moduleId": "deal-economics",
    "lesson": "Compare margin, close probability, sales cycle, onboarding capacity, retention, and strategic fit."
  },
  {
    "note": "Churn",
    "moduleId": "deal-economics",
    "lesson": "Treat retention as a delayed cohort outcome that can change which acquisition strategy is valuable."
  },
  {
    "note": "How to measure success",
    "moduleId": "outcome-loop",
    "lesson": "Use metric contracts, baselines, appropriate comparisons, and explicit guardrails."
  },
  {
    "note": "Referencing buying tools",
    "moduleId": "tool-access",
    "lesson": "Evaluate buy-versus-build using tested capability coverage, quality, reliability, and total operating cost."
  },
  {
    "note": "Local cake shops",
    "moduleId": "conversion-creativity",
    "lesson": "Apply the same systems thinking to a concrete inquiry-to-fulfillment workflow."
  },
  {
    "note": "Out-of-the-box thinking on conversions",
    "moduleId": "conversion-creativity",
    "lesson": "Look for overlooked customer friction and test an intervention rather than assuming more traffic or messages."
  },
  {
    "note": "Repeatable across multiple customers",
    "moduleId": "repeatable-platform",
    "lesson": "Separate reusable infrastructure, configurable behavior, and bespoke work."
  },
  {
    "note": "Systems thinking is important",
    "moduleId": "vertical-harness",
    "lesson": "Trace data, decisions, tools, people, constraints, failures, and outcomes across the complete system."
  },
  {
    "note": "Monaco for enterprise sales",
    "moduleId": "enterprise-workflows",
    "lesson": "Practice multistakeholder workflows, durable execution, ownership, approvals, and economic adoption; do not claim an unverified company segment strategy."
  },
  {
    "note": "Similar patterns across industries",
    "moduleId": "repeatable-platform",
    "lesson": "Find recurring jobs and transitions while preserving domain-specific rules and sources."
  },
  {
    "note": "Roadmap is three parts",
    "moduleId": "repeatable-platform",
    "lesson": "Focused official-site and blog research did not verify the three named parts. The public layered build order is a separate source-backed finding; any three-stage roadmap here is explicitly a practice proposal."
  },
  {
    "note": "Natural pull from large companies",
    "moduleId": "enterprise-workflows",
    "lesson": "Treat repeated large-customer requests as evidence to validate against delivery cost and product repeatability."
  },
  {
    "note": "AI-native platform",
    "moduleId": "repeatable-platform",
    "lesson": "Design around evidence, decisions, delegated execution, and measurable outcomes while retaining operational controls."
  },
  {
    "note": "Agents are only effective with tools",
    "moduleId": "tool-access",
    "lesson": "For action-oriented workflows, useful tool capabilities connect model judgment to evidence and execution; tool access alone does not establish quality."
  },
  {
    "note": "Ad revenue would be a huge project",
    "moduleId": "ad-revenue",
    "lesson": "Decompose the revenue system, clarify advertiser versus publisher, and choose a measurable bounded pilot."
  },
  {
    "note": "Automating long-running workflows",
    "moduleId": "enterprise-workflows",
    "lesson": "Use persistent state, event-driven resume, approval expiry, idempotency or reconciliation, and operator recovery."
  },
  {
    "note": "First principles",
    "moduleId": "five-year-vision",
    "lesson": "Start from the job, constraints, and outcome before selecting today's interfaces or tools."
  },
  {
    "note": "What's the way of operating five years from now?",
    "moduleId": "five-year-vision",
    "lesson": "Describe a plausible future, expose assumptions, and backcast the capabilities needed."
  },
  {
    "note": "Build toward that; thinking big",
    "moduleId": "five-year-vision",
    "lesson": "Choose a useful present-day pilot that tests a consequential future assumption."
  }
];

window.CAPSTONES = [
  {
    "id": "enterprise-expansion",
    "title": "Enterprise expansion without bespoke chaos",
    "brief": "Fictional case. A sales platform has succeeded with smaller customers. Four larger customers now request account research, personalized demos, cross-region ownership, and security review. Each uses a different CRM setup. The team has six weeks for a pilot and two implementation engineers. The sales leader wants to promise full autonomous outreach; operations worries about inconsistent data and implementation load.",
    "constraints": [
      "The product's public capability catalog supports HubSpot; a Salesforce connector is planned, not released.",
      "Account ownership can change during a run, and some accounts are suppressed from outreach.",
      "Research and demo preparation can take days because reviewers must approve claims and next actions.",
      "There is no reliable baseline for review time or opportunity quality yet.",
      "The business wants a repeatable deployment pattern across customers, not four unrelated custom builds."
    ],
    "deliverables": [
      "Clarify the outcome, baseline, users, and highest-risk assumptions.",
      "Choose a narrow pilot and trace one account through data, tools, judgment, approvals, and state transitions.",
      "Describe API/MCP integration choices and which rules code enforces.",
      "Define evaluations, outcome events, rollout gates, and operator recovery.",
      "Propose a reusable platform/configuration boundary and one next roadmap investment."
    ],
    "rubric": [
      {
        "label": "Business framing and scope",
        "points": 25,
        "criteria": "Defines accepted customer outcomes, constraints, baseline gaps, and a useful pilot; distinguishes enterprise demand from validated repeatability."
      },
      {
        "label": "Architecture and data",
        "points": 25,
        "criteria": "Maps entities, provenance, permissions, API/MCP boundaries, supported capabilities, durable state, and action identity."
      },
      {
        "label": "Evaluation and economics",
        "points": 20,
        "criteria": "Separates output quality from delayed pipeline/retention outcomes; includes review effort, capacity, cohort timing, and a comparison plan."
      },
      {
        "label": "Recovery and rollout",
        "points": 20,
        "criteria": "Handles stale approvals, ownership changes, duplicate actions, unknown outcomes, and gradual expansion with accountable operators."
      },
      {
        "label": "Communication",
        "points": 10,
        "criteria": "Explains choices, alternatives, assumptions, and what evidence would change the recommendation."
      }
    ],
    "answer": "One defensible first deployment is evidence-backed account research plus a functioning HubSpot demo draft for one customer segment, with rep approval and no autonomous sending. Clarify which fields and sources are authoritative, model account ownership and suppression deterministically, and keep roadmap claims out of the demo. Persist the research and review states and attach approvals to artifact versions. Establish baseline review time and label a held-out account sample. Evaluate support, fit, demo functionality, acceptance, and review effort; connect pilot cohorts to later qualified opportunities. Reuse the evidence, state, review, and tool-contract infrastructure while configuring customer criteria and mappings. Expand only after the pilot establishes useful adoption and manageable implementation cost.",
    "followups": [
      {
        "q": "A customer will sign only if you promise Salesforce next week. What do you say?",
        "strong": "Describe current support honestly, investigate the actual workflow requirement, and offer a clearly scoped supported alternative or an explicitly labeled prototype. Do not imply a planned connector is available."
      },
      {
        "q": "A rep approved an outreach draft yesterday, but account ownership changed today. What happens?",
        "strong": "Revalidate ownership, suppression, current permissions, and the approval scope before execution. A prior approval is not a permanent grant."
      },
      {
        "q": "Ten enterprise wins appear more valuable than a hundred small wins. What could reverse the decision?",
        "strong": "Longer close cycles, lower probability, expensive onboarding or support, capacity limits, concentration, weak retention, and costly one-off product work."
      }
    ],
    "timebox": "20 minutes: 3 discovery, 6 design, 4 evaluation and economics, 4 failure handling, 3 recommendation."
  },
  {
    "id": "cake-network",
    "title": "A cake-shop network wants more confirmed orders",
    "brief": "Fictional case. A network of 12 independent cake shops has sufficient inbound inquiries, but quote turnaround varies and customers often disappear before ordering. The owner asks for an AI agent and highly customized demos to sell the service to other shops. Some shops use booking software; others use spreadsheets. You have a two-week pilot budget and permission to use synthetic data for demonstrations.",
    "constraints": [
      "Production capacity is maintained by each shop and can change daily.",
      "Product, allergen, and customization information must come from reviewed shop records; missing details require staff confirmation.",
      "The agent may research and draft, but cannot commit inventory, take payment, or send messages without the agreed authorization.",
      "One order can include several products; one customer can contact more than one location.",
      "The owner wants a reusable service, and a payment or booking integration can be purchased if it meets the requirements."
    ],
    "deliverables": [
      "Diagnose three plausible conversion bottlenecks and identify the evidence that distinguishes them.",
      "Choose a first workflow and design a synthetic personalized demo that shows real operational value.",
      "Specify the company/location/customer/order data model and necessary tool contracts.",
      "Define business metrics, fulfillment guardrails, and a controlled pilot.",
      "Explain the reusable pattern and how it transfers to enterprise sales."
    ],
    "rubric": [
      {
        "label": "Customer and conversion reasoning",
        "points": 30,
        "criteria": "Investigates friction beyond traffic volume; includes timing, fit, information quality, trust, and capacity."
      },
      {
        "label": "Workflow and integration design",
        "points": 25,
        "criteria": "Uses domain data, stable IDs, appropriate bought tools, accurate demo capabilities, and explicit human control."
      },
      {
        "label": "Measurement",
        "points": 20,
        "criteria": "Defines qualified inquiry-to-confirmed-order conversion, review time, contribution, cancellations, and successful fulfillment using consistent cohorts."
      },
      {
        "label": "Repeatability and operations",
        "points": 15,
        "criteria": "Separates reusable process from shop-specific catalog and rules; handles changes, duplicate inquiries, and missing evidence."
      },
      {
        "label": "Explanation and judgment",
        "points": 10,
        "criteria": "States assumptions clearly and defends a narrow pilot without overstating what a demo proves."
      }
    ],
    "answer": "A useful approach is to inspect where suitable inquiries stall before proposing more lead generation. A pilot could collect occasion, date, size, and budget; retrieve approved offerings; check current capacity; and prepare a quote draft for staff. The demo should use synthetic records and accurately show the supported booking or spreadsheet integration. Normalize business, location, customer, and order IDs so duplicate inquiries do not inflate conversion. Measure the share of qualified inquiries that become confirmed and successfully fulfilled orders, alongside review time, cancellations, errors, and contribution. Productize the shared intake, evidence, workflow, and review layers while configuring each shop's catalog, capacity interface, and policies.",
    "followups": [
      {
        "q": "The owner says the agent should guarantee allergy-safe recommendations. What do you do?",
        "strong": "Use reviewed source information, expose missing or conflicting details, and require appropriate staff confirmation. Do not manufacture a guarantee from incomplete product data."
      },
      {
        "q": "Quote conversion improved, but late orders and cancellations rose. Did the pilot work?",
        "strong": "The system improved one transition while harming the full outcome. Investigate capacity and fulfillment controls before scaling."
      },
      {
        "q": "What is genuinely reusable across shops?",
        "strong": "The entity model, intake logic, evidence records, tool contracts, review flow, and measurement framework; catalogs, capacity, and local operating rules remain configurable."
      }
    ],
    "timebox": "18 minutes: 3 discovery, 5 workflow and demo, 4 data and tools, 4 measurement, 2 productization."
  },
  {
    "id": "ad-intelligence",
    "title": "A revenue team wants an always-on advertising agent",
    "brief": "Fictional case. A company that buys ads wants daily competitive and campaign intelligence, faster experiment design, and eventually automated campaign changes. Its reports duplicate news, mix event and publication dates, and compare revenue across different attribution windows. The VP calls this a huge revenue opportunity and wants a five-year platform vision. You have one analyst and one engineer for the first month.",
    "constraints": [
      "The first release can read approved campaign exports, public competitor sources, and internal product documentation.",
      "It can draft reports and experiment briefs but has no authority to publish ads or change spend.",
      "Conversions arrive with a delay, source reports can be corrected, and scheduled jobs may be delivered twice.",
      "Some pricing and product changes are semantic; many page changes are cosmetic.",
      "Any later autonomous action must have a clear owner, limits, traceability, and a recovery path."
    ],
    "deliverables": [
      "Define the economic objective and the first measurable bottleneck.",
      "Design daily collection, deduplication, change detection, retrieval, synthesis, and delivery.",
      "Explain event time, publication time, watermarks, historical snapshots, and idempotent delivery.",
      "Propose offline evaluations and a measurement plan that distinguishes attribution from incrementality.",
      "Backcast a five-year operating model into a useful first-month pilot and explicit expansion gates."
    ],
    "rubric": [
      {
        "label": "Objective and first-principles scope",
        "points": 25,
        "criteria": "Clarifies advertiser economics, chooses a bounded useful pilot, and exposes assumptions behind the larger vision."
      },
      {
        "label": "Data and long-running architecture",
        "points": 25,
        "criteria": "Handles time semantics, snapshots, duplicate events, durable state, corrections, and delivery identity."
      },
      {
        "label": "Evaluation and causal reasoning",
        "points": 25,
        "criteria": "Measures supported material changes, missed events, relevance, review effort, and experiment outcomes; addresses attribution windows and confounders."
      },
      {
        "label": "Action control and operations",
        "points": 15,
        "criteria": "Separates research from spend/publishing authority and specifies limits, recovery, ownership, and escalation."
      },
      {
        "label": "Communication and roadmap",
        "points": 10,
        "criteria": "Explains a credible future model and connects current work to testable capabilities without claiming certainty."
      }
    ],
    "answer": "Begin with an analyst-reviewed daily brief and evidence-backed experiment proposals, focused on one campaign segment and a small competitor watchlist. Register sources and preserve snapshots with event, publication, retrieval, and effective dates where available. Cluster coverage by underlying event, compare like-for-like metrics, and use a delivery ledger so reruns update or skip an already delivered event. Evaluate material-change precision and recall, factual support, relevance, and review time before connecting findings to business experiments. Use comparable attribution windows and a controlled evaluation where feasible; do not call attributed revenue incremental impact. The future vision can delegate routine monitoring and experiment preparation, while today's pilot tests whether reliable evidence changes decisions.",
    "followups": [
      {
        "q": "The scheduler runs twice. How do you avoid duplicate alerts?",
        "strong": "Use a stable event/report version identity and a delivery ledger; reconcile uncertain sends and only advance durable processing markers after successful persistence."
      },
      {
        "q": "An old event was republished today. Is it new?",
        "strong": "Publication freshness alone is insufficient. Check event time, prior coverage, and whether there is a material update; label the update rather than treating the underlying event as new."
      },
      {
        "q": "What would earn authority to change spend?",
        "strong": "Demonstrated recommendation quality and useful controlled outcomes, plus explicit account authority, spend limits, approval policy, monitoring, rollback, and an accountable operator."
      }
    ],
    "timebox": "20 minutes: 3 objective, 6 architecture, 5 evaluation, 3 operations, 3 future vision."
  }
];

