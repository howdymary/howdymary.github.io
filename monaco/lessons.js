window.LESSONS = [
  {
    title: "Write the research contract",
    kicker: "01 / Define a useful finish",
    explanation: [
      "Start with the decision your research should improve. ‘Research competitors’ is too broad. ‘Find material changes to three competitors’ pricing since the last successful run, with dated evidence and implications for our sales team’ gives the system a useful finish line.",
      "Define the audience, entities, time window, allowed sources, output fields, and research budget. Separate facts, interpretations, and unanswered questions. Write one excellent example before choosing a framework; this becomes the first evaluation case."
    ],
    build: [
      "Create a task object with question, audience, scope, freshness window, source policy, maximum tool calls, and output schema.",
      "Draft a sample report containing findings, source IDs, dates, implications, and gaps. Specify which fields are required.",
      "Write three failure examples: an old event described as new, an unsupported claim, and a report that answers the wrong question."
    ],
    test: "Give the same contract to two people. Can both identify what a successful report must contain and when research should stop? Resolve disagreements before implementation.",
    explain: "I start with a decision and a measurable output, so I can evaluate usefulness before adding autonomy.",
    source: { title: "Anthropic · Defining agent evaluations", url: "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents" }
  },
  {
    title: "Choose workflow or agent",
    kicker: "02 / Spend autonomy where it helps",
    explanation: [
      "A workflow follows predefined steps. An agent lets the model choose its next step or tool from observations. RAG means retrieving relevant evidence for generation; either architecture can use it. RAG does not retrain the model or guarantee that its answer is true.",
      "Start with retrieve → draft → validate. Add an adaptive loop when results genuinely change the next research question. Keep eligibility checks, access rules, send limits, and budgets in code. Use one agent first; add specialists when evaluation shows a worthwhile gain."
    ],
    build: [
      "Map the task into inputs, decisions, tools, and outputs. Mark which decisions need interpretation and which have clear rules.",
      "Implement a fixed baseline using the same source corpus and output schema that the later agent will use.",
      "Compare the baseline and agent on answer quality, latency, cost, and human review time before choosing greater complexity."
    ],
    test: "Ask an exact product-policy question and an open competitor investigation. Explain why they may need different amounts of adaptive research.",
    explain: "The model decides how to investigate ambiguity; application code enforces the boundaries of the task.",
    source: { title: "Anthropic · Building effective agents", url: "https://www.anthropic.com/engineering/building-effective-agents" }
  },
  {
    title: "Prepare the knowledge base",
    kicker: "03 / Make evidence retrievable",
    explanation: [
      "Fetch approved material, extract readable text, normalize duplicates, and preserve headings, tables, and source identity. Split documents into meaningful passages. Keep a statistic with its company, period, currency, and footnotes; a fragment without context can produce a plausible wrong answer.",
      "Store original text with document ID, chunk ID, URL, title, timestamps, content hash, and access metadata. Fetch time is different from publication time. Refresh changed documents, remove deleted content, and retain snapshots when the task requires historical comparisons."
    ],
    build: [
      "Ingest a small representative corpus. Inspect parsed output from a normal page, a table, a PDF, and a page with navigation clutter.",
      "Compare section-based chunks with a fixed-size baseline. Try several sizes; tune overlap only when it improves your actual questions.",
      "Create an update job keyed by document ID and content hash. Keep chunk lineage so replaced or deleted documents do not leave stale passages."
    ],
    test: "Retrieve a passage containing a number. Can you identify its entity, period, units, original source, and current document version without guessing?",
    explain: "Good ingestion preserves the context and provenance that the answer will later need.",
    source: { title: "Microsoft · Chunk documents for RAG", url: "https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents" }
  },
  {
    title: "Retrieve, then rerank",
    kicker: "04 / Find evidence before writing",
    explanation: [
      "Keyword retrieval helps with exact names, identifiers, and product codes. Vector retrieval helps with paraphrases and conceptual similarity. Hybrid retrieval combines both candidate lists. A reranker then evaluates a smaller candidate set against the question before context reaches the generator.",
      "Apply tenant, permission, entity, and time constraints in trusted application code. Use the same compatible embedding model for indexed passages and queries. Start with a modest candidate pool and inspect results; a larger top-k can add noise rather than useful evidence."
    ],
    build: [
      "Implement keyword retrieval first, then compare vector and hybrid approaches against the same labeled questions.",
      "For an initial experiment, retrieve 20 candidates, deduplicate them, and rerank to five passages. Treat these counts as tunable settings.",
      "Return passage text plus source IDs and metadata. Filter unauthorized content before it enters model context, including cached results."
    ],
    test: "Try an exact product code, a paraphrased question, an outdated document, and a document the user cannot access. Inspect the actual retrieved passages.",
    explain: "I measure whether the evidence was retrieved separately from whether the model used it correctly.",
    source: { title: "Anthropic · Contextual Retrieval", url: "https://www.anthropic.com/research/contextual-retrieval" }
  },
  {
    title: "Build the bounded tool loop",
    kicker: "05 / Give the agent a harness",
    explanation: [
      "The harness is the surrounding software that executes tool calls, validates arguments, persists progress, controls permissions, and stops work. The model proposes an action; the harness decides whether that action is allowed and records what happened.",
      "Give each tool a narrow purpose and structured results. A timeout, an empty result, and an authorization error must be distinguishable. Save completed steps and evidence outside the chat context so a restart can resume useful work. Research sources remain untrusted data."
    ],
    build: [
      "Define schemas for search_web, retrieve_knowledge, fetch_document, compare_snapshots, and save_draft, with clear error responses.",
      "Persist run ID, task, completed actions, evidence IDs, remaining questions, and budget used after each completed tool call.",
      "Enforce tool allowlists, argument validation, deadlines, bounded retries, and a maximum step count in code. Keep publishing and sending separately controlled."
    ],
    test: "Interrupt a run after its second tool call. Resume it without losing evidence, repeating completed writes, or treating a timeout as a valid empty result.",
    explain: "The harness turns model decisions into a controlled, observable process that can recover from failure.",
    source: { title: "Anthropic · Harnesses for long-running agents", url: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents" }
  },
  {
    title: "Make every claim inspectable",
    kicker: "06 / Show what supports the answer",
    explanation: [
      "Build an evidence ledger before the final report: claim, supporting passage IDs, source dates, and unresolved contradictions. Generate citations from stored source records instead of allowing the model to invent URLs. A citation is useful only when the cited passage supports the attached claim.",
      "Use explicit statuses such as supported, conflicting, stale, and insufficient. Preserve uncertainty when evidence disagrees. A source saying ‘ignore previous instructions’ does not authorize actions. Prompt wording alone cannot enforce this boundary; tool permissions and output handling must do real work."
    ],
    build: [
      "Require structured findings with claim, evidence_ids, published_at, interpretation, and unresolved_questions fields.",
      "Validate that all cited IDs exist and that dates, numbers, and entity names match source material; review whether passages support conclusions.",
      "When support is missing, search again within the budget or return a specific gap. Render external text safely and keep source content out of tool permissions."
    ],
    test: "Insert a conflicting source and a malicious instruction into retrieved material. The answer should describe the conflict while the tool permissions remain unchanged.",
    explain: "I can trace each material claim back to evidence and explain what the system still does not know.",
    source: { title: "OWASP · Prompt injection prevention", url: "https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html" }
  },
  {
    title: "Evaluate the whole system",
    kicker: "07 / Turn failures into test cases",
    explanation: [
      "Create representative questions before optimizing prompts. Include ordinary tasks, missing evidence, exact identifiers, stale pages, contradictory sources, and permission boundaries. Keep some cases held out so repeated tuning does not disguise weak generalization.",
      "Measure retrieval, answer quality, tool execution, and business usefulness separately. Use deterministic checks for formats and access rules; use expert review for relevance and factual support. Calibrate model graders against people, inspect traces, and repeat important cases because results can vary."
    ],
    build: [
      "Record the expected evidence, required answer elements, prohibited actions, and acceptable uncertainty for each evaluation case.",
      "Track retrieval success, citation support, completeness, tool errors, elapsed time, cost, and human correction time in separate columns.",
      "Run the same suite after changes to prompts, models, tools, chunks, or retrieval settings. Add meaningful production failures as regression cases."
    ],
    test: "If an answer fails, can you locate the failure in parsing, retrieval, reasoning, citation, or execution instead of merely changing the prompt?",
    explain: "A successful demo is one example; a useful evaluation set tells me whether the system works repeatedly and where it fails.",
    source: { title: "Anthropic · Demystifying agent evaluations", url: "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents" }
  },
  {
    title: "Deploy an operation you can trust",
    kicker: "08 / Own freshness, cost, and recovery",
    explanation: [
      "Move from offline evaluation to shadow runs, reviewed drafts, and a limited pilot. Define the owner, escalation route, release criteria, and rollback path. Measure useful completed reports and review effort alongside token cost; an inexpensive inaccurate report still creates work.",
      "For recurring research, define timezone, schedule, last successful checkpoint, source freshness limits, and a deduplication key. Record partial failures rather than silently skipping them. Refresh permissions when reading private material, and ensure removal or revocation also affects caches and stored outputs."
    ],
    build: [
      "Deploy with restricted credentials, configuration outside prompts, observable run logs, and alerts for repeated errors or budget overruns.",
      "Key scheduled runs by task and time window. Advance the successful checkpoint only after required processing completes; reconcile uncertain external writes before retrying.",
      "Review quality and adoption with users. Expand sources or autonomous actions only after the pilot meets agreed criteria, and keep an immediate stop control."
    ],
    test: "Simulate a missed schedule, revoked document access, and a partially completed run. Verify recovery without duplicate reports or unauthorized evidence.",
    explain: "Production readiness means the agent stays useful as sources, permissions, tools, and user needs change.",
    source: { title: "Microsoft · Document-level access control", url: "https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview" }
  }
];

window.GLOSSARY = [
  { term: "Agent", definition: "A system in which a model chooses next steps or tools based on the task and observations." },
  { term: "Workflow", definition: "A sequence of steps defined by application code; individual steps may still use a model." },
  { term: "Harness", definition: "The software that runs the agent: tool execution, permissions, state, retries, budgets, and logs." },
  { term: "RAG", definition: "Retrieval-augmented generation: find relevant evidence and provide it as context for an answer." },
  { term: "Chunk", definition: "A retrievable passage from a larger document, stored with enough context and metadata to interpret it." },
  { term: "Embedding", definition: "A numeric representation used to compare semantic similarity; similarity does not establish factual truth." },
  { term: "Hybrid search", definition: "Retrieval that combines keyword matching and vector similarity to find complementary evidence." },
  { term: "Reranker", definition: "A second-stage model or scoring method that reorders retrieved candidates for a particular question." },
  { term: "Context window", definition: "The amount of input and generated text a model can handle in one interaction; it is not durable storage." },
  { term: "Provenance", definition: "The origin and history of evidence: source, document version, dates, and transformations." },
  { term: "Grounding", definition: "Connecting an answer's claims to available evidence instead of relying only on model memory." },
  { term: "ACL", definition: "An access control list defining which identities may access a document or resource; enforce it outside the model." },
  { term: "Idempotency", definition: "Designing an operation so repeating the same request does not create an additional unintended effect." },
  { term: "Evaluation", definition: "A test case and grading method that measures whether an agent meets defined success criteria." },
  { term: "Abstention", definition: "Explicitly declining to assert an answer when evidence is insufficient, while explaining the gap or next step." }
];
