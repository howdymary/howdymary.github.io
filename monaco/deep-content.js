/* Source-grounded mastery curriculum. Protocol examples are version-labeled. */
window.DEEP_CONCEPTS = [
  {
    "id": "model",
    "term": "Model & inference",
    "category": "Models & agency",
    "plain": "A model is a learned function; inference is using its learned parameters to produce an output from a new input.",
    "technical": "A language model receives tokenized input and generates output tokens. Its weights encode learned patterns; the application supplies the current task, evidence, tool descriptions, and output constraints. Calling a model does not by itself give it a browser, CRM connection, or persistent memory.",
    "example": "For a sales agent, the model can interpret an account brief and propose a research query. Python executes that query.",
    "where": "Inside the reasoning or generation step of the application.",
    "when": "Use model judgment for language and ambiguous decisions. Use code for exact calculations, access checks, and known rules.",
    "misconception": "A capable model is already an end-to-end business agent.",
    "question": "If the model says it checked the CRM, what proves that happened?",
    "answer": "A successful tool execution with its arguments, result, timestamp, and source records—not the model’s statement alone.",
    "followup": "How would you detect a capability that exists in the prompt but has no actual tool?",
    "strong": "I separate the model’s proposal from execution and inspect the tool trace.",
    "weak": "The model is intelligent, so it can access whatever information it needs.",
    "sources": [
      {
        "title": "Hugging Face · LLM course",
        "url": "https://huggingface.co/learn/llm-course/chapter1/1"
      },
      {
        "title": "Anthropic · Agent and workflow patterns",
        "url": "https://www.anthropic.com/engineering/building-effective-agents"
      }
    ],
    "explain30": "A model is a learned function; inference is using its learned parameters to produce an output from a new input. For a sales agent, the model can interpret an account brief and propose a research query. Python executes that query.",
    "explain120": "Start with the definition: A model is a learned function; inference is using its learned parameters to produce an output from a new input. Then trace the mechanism: A language model receives tokenized input and generates output tokens. Its weights encode learned patterns; the application supplies the current task, evidence, tool descriptions, and output constraints. Calling a model does not by itself give it a browser, CRM connection, or persistent memory. In this build: For a sales agent, the model can interpret an account brief and propose a research query. Python executes that query. Explain the decision: Use model judgment for language and ambiguous decisions. Use code for exact calculations, access checks, and known rules. Close with how you would verify it: A successful tool execution with its arguments, result, timestamp, and source records—not the model’s statement alone."
  },
  {
    "id": "tokens",
    "term": "Tokens & context window",
    "category": "Models & agency",
    "plain": "Tokens are the units a model processes. Its context window limits how much input and generated content can fit in one request.",
    "technical": "Token counts depend on the tokenizer and content. The context includes instructions, messages, retrieved passages, and tool results; output also consumes model-specific capacity. Long histories increase cost and can bury useful evidence. Compaction is a lossy summary, not a database.",
    "example": "Keep a competitor’s exact pricing passage and source ID while summarizing completed research steps.",
    "where": "The boundary around each model invocation.",
    "when": "Budget context for the evidence needed by the current decision; retrieve selectively and persist originals outside the conversation.",
    "misconception": "A larger context window means every document should always be included.",
    "question": "What would you preserve when compressing a long run?",
    "answer": "Task constraints, unresolved questions, decisions, action status, and evidence references; retain original sources in durable storage.",
    "followup": "What can go wrong when a summary drops a qualifier or effective date?",
    "strong": "I preserve exact evidence separately and use summaries to navigate it.",
    "weak": "I summarize everything and trust the summary as the source of truth.",
    "sources": [
      {
        "title": "Hugging Face · LLM course",
        "url": "https://huggingface.co/learn/llm-course/chapter1/1"
      },
      {
        "title": "Anthropic · Long-running harnesses",
        "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
      }
    ],
    "explain30": "Tokens are the units a model processes. Its context window limits how much input and generated content can fit in one request. Keep a competitor’s exact pricing passage and source ID while summarizing completed research steps.",
    "explain120": "Start with the definition: Tokens are the units a model processes. Its context window limits how much input and generated content can fit in one request. Then trace the mechanism: Token counts depend on the tokenizer and content. The context includes instructions, messages, retrieved passages, and tool results; output also consumes model-specific capacity. Long histories increase cost and can bury useful evidence. Compaction is a lossy summary, not a database. In this build: Keep a competitor’s exact pricing passage and source ID while summarizing completed research steps. Explain the decision: Budget context for the evidence needed by the current decision; retrieve selectively and persist originals outside the conversation. Close with how you would verify it: Task constraints, unresolved questions, decisions, action status, and evidence references; retain original sources in durable storage."
  },
  {
    "id": "structured-output",
    "term": "Structured output",
    "category": "Models & agency",
    "plain": "Structured output makes a model’s response fit an expected data shape.",
    "technical": "A schema can constrain or validate fields and types such as findings, evidence IDs, and gaps. Schema validity does not establish that a claim is true, that a source supports it, or that an action is authorized. Validate those properties separately.",
    "example": "Require each demo claim to include text, a capability ID, and an evidence status.",
    "where": "Between model generation and application code consuming the result.",
    "when": "Use it when downstream code needs predictable fields. Handle refusal, truncation, invalid data, and absent evidence explicitly.",
    "misconception": "Valid JSON is a factually correct answer.",
    "question": "A report passes its schema but invents Salesforce support. Which check is missing?",
    "answer": "A capability/evidence support check: the current approved product record must establish the exact claim.",
    "followup": "Would checking only that the cited ID exists be enough?",
    "strong": "I validate shape, then source identity, then whether the evidence supports the claim.",
    "weak": "The schema passed, so the answer is reliable.",
    "sources": [
      {
        "title": "JSON Schema · Understanding JSON Schema",
        "url": "https://json-schema.org/understanding-json-schema"
      },
      {
        "title": "Claude · Handling client tool calls",
        "url": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls"
      },
      {
        "title": "Anthropic · Agent evaluations",
        "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
      }
    ],
    "explain30": "Structured output makes a model’s response fit an expected data shape. Require each demo claim to include text, a capability ID, and an evidence status.",
    "explain120": "Start with the definition: Structured output makes a model’s response fit an expected data shape. Then trace the mechanism: A schema can constrain or validate fields and types such as findings, evidence IDs, and gaps. Schema validity does not establish that a claim is true, that a source supports it, or that an action is authorized. Validate those properties separately. In this build: Require each demo claim to include text, a capability ID, and an evidence status. Explain the decision: Use it when downstream code needs predictable fields. Handle refusal, truncation, invalid data, and absent evidence explicitly. Close with how you would verify it: A capability/evidence support check: the current approved product record must establish the exact claim."
  },
  {
    "id": "tool-calling",
    "term": "Tool calling",
    "category": "Models & agency",
    "plain": "Tool calling lets a model request that the application run a named operation with arguments.",
    "technical": "The application gives the model tool descriptions and schemas. The model emits a tool request; trusted code validates and executes it, then returns a result linked to that call. The model may continue or finish. The model does not execute arbitrary Python simply by naming a function.",
    "example": "The model requests retrieve_knowledge with query “HubSpot integration”; the harness runs retrieval and returns passages.",
    "where": "At the boundary between model reasoning and deterministic execution.",
    "when": "Use narrow tools that match useful decisions. Return explicit errors and sufficient evidence metadata; do not expose broad write access by default.",
    "misconception": "A model tool call, an HTTP request, and an MCP request are the same message.",
    "question": "Who holds the API key and sends the actual service request?",
    "answer": "The trusted application or adapter, using credentials appropriate to the caller; credentials need not appear in model context.",
    "followup": "What happens if the model adds principal: admin to its arguments?",
    "strong": "The schema rejects unexpected fields and the server derives identity from trusted authentication.",
    "weak": "I tell the model not to misuse the admin parameter.",
    "sources": [
      {
        "title": "Claude · Handling client tool calls",
        "url": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls"
      },
      {
        "title": "MCP · Tools, 2026-07-28",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
      }
    ],
    "explain30": "Tool calling lets a model request that the application run a named operation with arguments. The model requests retrieve_knowledge with query “HubSpot integration”; the harness runs retrieval and returns passages.",
    "explain120": "Start with the definition: Tool calling lets a model request that the application run a named operation with arguments. Then trace the mechanism: The application gives the model tool descriptions and schemas. The model emits a tool request; trusted code validates and executes it, then returns a result linked to that call. The model may continue or finish. The model does not execute arbitrary Python simply by naming a function. In this build: The model requests retrieve_knowledge with query “HubSpot integration”; the harness runs retrieval and returns passages. Explain the decision: Use narrow tools that match useful decisions. Return explicit errors and sufficient evidence metadata; do not expose broad write access by default. Close with how you would verify it: The trusted application or adapter, using credentials appropriate to the caller; credentials need not appear in model context."
  },
  {
    "id": "agent",
    "term": "Agent",
    "category": "Models & agency",
    "plain": "An agent is a system in which a model chooses next actions from observations while pursuing a goal.",
    "technical": "An agent loop typically proposes an action, runs an allowed tool, observes the result, updates state, and either continues or stops. Its usefulness depends on task design, evidence, tools, and the harness. Autonomy is bounded by permissions and budgets.",
    "example": "A competitor investigator reads a pricing page, discovers an annual-billing qualifier, and chooses a follow-up source before comparing prices.",
    "where": "The adaptive decision loop within a larger product workflow.",
    "when": "Use an agent when findings materially change the next step. Compare it with a fixed workflow on quality, cost, latency, and review effort.",
    "misconception": "An agent must be fully autonomous or use many subagents.",
    "question": "What justifies adding an adaptive loop to a fixed retrieval pipeline?",
    "answer": "Evidence that conditional investigation improves representative tasks enough to justify additional variability and cost.",
    "followup": "What would make you remove the agent and return to a workflow?",
    "strong": "I add autonomy where uncertainty changes the path and measure the gain against a baseline.",
    "weak": "Agents are the newest architecture, so every step should be agentic.",
    "sources": [
      {
        "title": "Anthropic · Agent and workflow patterns",
        "url": "https://www.anthropic.com/engineering/building-effective-agents"
      }
    ],
    "explain30": "An agent is a system in which a model chooses next actions from observations while pursuing a goal. A competitor investigator reads a pricing page, discovers an annual-billing qualifier, and chooses a follow-up source before comparing prices.",
    "explain120": "Start with the definition: An agent is a system in which a model chooses next actions from observations while pursuing a goal. Then trace the mechanism: An agent loop typically proposes an action, runs an allowed tool, observes the result, updates state, and either continues or stops. Its usefulness depends on task design, evidence, tools, and the harness. Autonomy is bounded by permissions and budgets. In this build: A competitor investigator reads a pricing page, discovers an annual-billing qualifier, and chooses a follow-up source before comparing prices. Explain the decision: Use an agent when findings materially change the next step. Compare it with a fixed workflow on quality, cost, latency, and review effort. Close with how you would verify it: Evidence that conditional investigation improves representative tasks enough to justify additional variability and cost."
  },
  {
    "id": "workflow",
    "term": "Workflow",
    "category": "Models & agency",
    "plain": "A workflow is a process whose sequence and branches are specified in application logic.",
    "technical": "A workflow may contain model calls, retrieval, human review, and tools. The key distinction is who determines control flow: predefined code versus a model choosing the next action. A workflow can contain a bounded agent as one step.",
    "example": "A daily briefing always collects sources, deduplicates, compares snapshots, drafts, validates, and queues delivery.",
    "where": "The outer business process around research and actions.",
    "when": "Prefer it for predictable tasks, compliance gates, repeatable scheduling, and reliable handoffs.",
    "misconception": "Using an LLM anywhere makes the entire system an autonomous agent.",
    "question": "Can a workflow use RAG and still be deterministic in its control flow?",
    "answer": "Yes. Code can always retrieve, generate, and validate in that order while model outputs remain variable.",
    "followup": "Which branches in your proposed system should be explicit code?",
    "strong": "The outer workflow enforces eligibility and delivery; an inner agent investigates ambiguous evidence.",
    "weak": "Workflow means no AI.",
    "sources": [
      {
        "title": "Anthropic · Agent and workflow patterns",
        "url": "https://www.anthropic.com/engineering/building-effective-agents"
      }
    ],
    "explain30": "A workflow is a process whose sequence and branches are specified in application logic. A daily briefing always collects sources, deduplicates, compares snapshots, drafts, validates, and queues delivery.",
    "explain120": "Start with the definition: A workflow is a process whose sequence and branches are specified in application logic. Then trace the mechanism: A workflow may contain model calls, retrieval, human review, and tools. The key distinction is who determines control flow: predefined code versus a model choosing the next action. A workflow can contain a bounded agent as one step. In this build: A daily briefing always collects sources, deduplicates, compares snapshots, drafts, validates, and queues delivery. Explain the decision: Prefer it for predictable tasks, compliance gates, repeatable scheduling, and reliable handoffs. Close with how you would verify it: Yes. Code can always retrieve, generate, and validate in that order while model outputs remain variable."
  },
  {
    "id": "harness",
    "term": "Harness",
    "category": "Models & agency",
    "plain": "The harness is the software that turns model decisions into a controlled, observable execution process.",
    "technical": "It prepares context, exposes tools, validates actions, persists state, limits cost and time, handles failures, and records traces. A prompt is one input to the harness. Durable execution, credentials, and authorization require actual software behavior.",
    "example": "The research harness permits approved reads, saves every source, caps tool calls, and blocks unapproved outreach.",
    "where": "Around the model and tools, spanning the complete run lifecycle.",
    "when": "Design the harness around failure modes and business constraints before expanding autonomy.",
    "misconception": "The harness is just a system prompt or a model vendor’s SDK.",
    "question": "If the worker crashes after a tool call, what must the harness know?",
    "answer": "The action ID, intended operation, execution status, evidence/result, remaining work, and whether reconciliation is required.",
    "followup": "Which responsibilities would you buy from infrastructure and which are domain-specific?",
    "strong": "I distinguish the generic runtime from the domain’s data, policies, tools, and evaluations.",
    "weak": "A sufficiently detailed prompt will handle recovery and access control.",
    "sources": [
      {
        "title": "Anthropic · Long-running harnesses",
        "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
      },
      {
        "title": "Anthropic · Agent and workflow patterns",
        "url": "https://www.anthropic.com/engineering/building-effective-agents"
      }
    ],
    "explain30": "The harness is the software that turns model decisions into a controlled, observable execution process. The research harness permits approved reads, saves every source, caps tool calls, and blocks unapproved outreach.",
    "explain120": "Start with the definition: The harness is the software that turns model decisions into a controlled, observable execution process. Then trace the mechanism: It prepares context, exposes tools, validates actions, persists state, limits cost and time, handles failures, and records traces. A prompt is one input to the harness. Durable execution, credentials, and authorization require actual software behavior. In this build: The research harness permits approved reads, saves every source, caps tool calls, and blocks unapproved outreach. Explain the decision: Design the harness around failure modes and business constraints before expanding autonomy. Close with how you would verify it: The action ID, intended operation, execution status, evidence/result, remaining work, and whether reconciliation is required."
  },
  {
    "id": "vertical-harness",
    "term": "Vertical harness",
    "category": "Models & agency",
    "plain": "A vertical harness adapts agent execution to the data, decisions, tools, and outcomes of a particular business domain.",
    "technical": "This is a design term, not an MCP protocol feature. Domain ingredients include an entity model, industry data, enrichment sources, workflow-specific tools, policy boundaries, outcome events, and evaluation criteria. Reusable runtime components support customer-specific configuration.",
    "example": "Enterprise sales needs account/contact/opportunity relationships, buyer signals, product truth, CRM actions, and delayed revenue/retention outcomes.",
    "where": "Between a general agent runtime and a customer’s operating workflow.",
    "when": "Use a shared core when customers repeat the same process; configure data mappings and policies rather than copying customer-specific code everywhere.",
    "misconception": "A vertical harness is a generic chatbot with industry terminology in its prompt.",
    "question": "What can be shared between a bakery growth agent and an enterprise sales agent?",
    "answer": "Research, identity resolution, evidence, action ledgers, and measurement patterns; qualification, tools, conversion events, and economics differ.",
    "followup": "What evidence shows a one-customer customization should become a platform feature?",
    "strong": "I look for repeated workflows, similar data contracts, measurable value, and bounded variation across customers.",
    "weak": "Every customer gets a separate prompt and that is the platform.",
    "sources": [
      {
        "title": "Anthropic · Long-running harnesses",
        "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
      },
      {
        "title": "Anthropic · Agent evaluations",
        "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
      }
    ],
    "explain30": "A vertical harness adapts agent execution to the data, decisions, tools, and outcomes of a particular business domain. Enterprise sales needs account/contact/opportunity relationships, buyer signals, product truth, CRM actions, and delayed revenue/retention outcomes.",
    "explain120": "Start with the definition: A vertical harness adapts agent execution to the data, decisions, tools, and outcomes of a particular business domain. Then trace the mechanism: This is a design term, not an MCP protocol feature. Domain ingredients include an entity model, industry data, enrichment sources, workflow-specific tools, policy boundaries, outcome events, and evaluation criteria. Reusable runtime components support customer-specific configuration. In this build: Enterprise sales needs account/contact/opportunity relationships, buyer signals, product truth, CRM actions, and delayed revenue/retention outcomes. Explain the decision: Use a shared core when customers repeat the same process; configure data mappings and policies rather than copying customer-specific code everywhere. Close with how you would verify it: Research, identity resolution, evidence, action ledgers, and measurement patterns; qualification, tools, conversion events, and economics differ."
  },
  {
    "id": "orchestration",
    "term": "Orchestration",
    "category": "Models & agency",
    "plain": "Orchestration coordinates which steps or workers run, in what order, and how their results are combined.",
    "technical": "It can be deterministic scheduling, model-directed delegation, or a combination. Parallel research helps when subtasks are independent; dependencies and shared writes require coordination. More workers can increase latency, cost, disagreement, and debugging complexity.",
    "example": "Research independent competitor pages in parallel, then compare normalized results only after collection finishes.",
    "where": "Between tasks, tools, workers, and shared state.",
    "when": "Start with one process and explicit steps. Add parallelism or specialists when traces show a real bottleneck or quality advantage.",
    "misconception": "More agents automatically create better reasoning.",
    "question": "Which parts of account research can run concurrently?",
    "answer": "Independent read-only source lookups; eligibility checks and approved writes still need their prerequisites and coordination.",
    "followup": "How would you avoid two workers creating the same CRM record?",
    "strong": "I share stable entity and action IDs and centralize write/reconciliation logic.",
    "weak": "Each agent will remember to avoid duplicates.",
    "sources": [
      {
        "title": "Anthropic · Agent and workflow patterns",
        "url": "https://www.anthropic.com/engineering/building-effective-agents"
      },
      {
        "title": "Temporal · Workflow execution",
        "url": "https://docs.temporal.io/workflow-execution"
      }
    ],
    "explain30": "Orchestration coordinates which steps or workers run, in what order, and how their results are combined. Research independent competitor pages in parallel, then compare normalized results only after collection finishes.",
    "explain120": "Start with the definition: Orchestration coordinates which steps or workers run, in what order, and how their results are combined. Then trace the mechanism: It can be deterministic scheduling, model-directed delegation, or a combination. Parallel research helps when subtasks are independent; dependencies and shared writes require coordination. More workers can increase latency, cost, disagreement, and debugging complexity. In this build: Research independent competitor pages in parallel, then compare normalized results only after collection finishes. Explain the decision: Start with one process and explicit steps. Add parallelism or specialists when traces show a real bottleneck or quality advantage. Close with how you would verify it: Independent read-only source lookups; eligibility checks and approved writes still need their prerequisites and coordination."
  },
  {
    "id": "skills",
    "term": "Skills",
    "category": "Models & agency",
    "plain": "A skill is a reusable package of task instructions and sometimes scripts or resources that guides how an agent performs a class of work.",
    "technical": "Skill formats vary by product. A skill supplies procedure and context; tools provide executable capabilities. Loading instructions does not create network access, permissions, or a reliable runtime. Treat supplied scripts and resources according to their trust boundary.",
    "example": "A demo-building skill explains how to choose approved templates, label synthetic data, and validate the finished walkthrough.",
    "where": "In the application’s task-specific instruction and resource layer.",
    "when": "Use skills for repeated procedures that need consistent guidance and examples. Use tools for actions the runtime must execute.",
    "misconception": "A skill, MCP server, and API are interchangeable integration mechanisms.",
    "question": "What does a “CRM skill” need before it can actually update a record?",
    "answer": "An authorized executable tool/API integration, validated arguments, action logging, and appropriate review controls.",
    "followup": "How would you version and evaluate a changed skill?",
    "strong": "I keep the procedure version in traces and run the relevant regression cases.",
    "weak": "Once a skill is loaded, it can access any service.",
    "sources": [
      {
        "title": "Anthropic · Agent skills",
        "url": "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"
      },
      {
        "title": "MCP · Architecture, 2026-07-28",
        "url": "https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture"
      }
    ],
    "explain30": "A skill is a reusable package of task instructions and sometimes scripts or resources that guides how an agent performs a class of work. A demo-building skill explains how to choose approved templates, label synthetic data, and validate the finished walkthrough.",
    "explain120": "Start with the definition: A skill is a reusable package of task instructions and sometimes scripts or resources that guides how an agent performs a class of work. Then trace the mechanism: Skill formats vary by product. A skill supplies procedure and context; tools provide executable capabilities. Loading instructions does not create network access, permissions, or a reliable runtime. Treat supplied scripts and resources according to their trust boundary. In this build: A demo-building skill explains how to choose approved templates, label synthetic data, and validate the finished walkthrough. Explain the decision: Use skills for repeated procedures that need consistent guidance and examples. Use tools for actions the runtime must execute. Close with how you would verify it: An authorized executable tool/API integration, validated arguments, action logging, and appropriate review controls."
  },
  {
    "id": "state",
    "term": "State",
    "category": "Models & agency",
    "plain": "State is the recorded condition of a task or business entity at a particular point in time.",
    "technical": "Operational state includes run IDs, completed actions, pending questions, evidence references, budgets, and approval status. Store it outside model context when it must survive restarts. Use transactions or explicit state transitions for consistency.",
    "example": "A research run is waiting_for_review after evidence checks pass; it becomes delivered only after a confirmed delivery receipt.",
    "where": "In durable application storage and the workflow state machine.",
    "when": "Persist facts needed to resume, reconcile, audit, and measure outcomes. Avoid treating a generated summary as authoritative execution status.",
    "misconception": "If the conversation history is saved, all necessary execution state is safe.",
    "question": "Why distinguish drafted, approved, sent, and acknowledged?",
    "answer": "They are different events with different evidence and failure recovery; conflating them can create duplicate actions and false success metrics.",
    "followup": "When does your outcome event become final?",
    "strong": "I define event semantics and timestamps for each meaningful transition.",
    "weak": "A successful model response means the workflow is complete.",
    "sources": [
      {
        "title": "Anthropic · Long-running harnesses",
        "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
      },
      {
        "title": "Temporal · Workflow execution",
        "url": "https://docs.temporal.io/workflow-execution"
      }
    ],
    "explain30": "State is the recorded condition of a task or business entity at a particular point in time. A research run is waiting_for_review after evidence checks pass; it becomes delivered only after a confirmed delivery receipt.",
    "explain120": "Start with the definition: State is the recorded condition of a task or business entity at a particular point in time. Then trace the mechanism: Operational state includes run IDs, completed actions, pending questions, evidence references, budgets, and approval status. Store it outside model context when it must survive restarts. Use transactions or explicit state transitions for consistency. In this build: A research run is waiting_for_review after evidence checks pass; it becomes delivered only after a confirmed delivery receipt. Explain the decision: Persist facts needed to resume, reconcile, audit, and measure outcomes. Avoid treating a generated summary as authoritative execution status. Close with how you would verify it: They are different events with different evidence and failure recovery; conflating them can create duplicate actions and false success metrics."
  },
  {
    "id": "memory",
    "term": "Memory",
    "category": "Models & agency",
    "plain": "Memory is information intentionally retained and retrieved to help later work.",
    "technical": "Memory may include user preferences, prior findings, summaries, and learned procedures. Separate it from source evidence and authoritative business records. Decide ownership, scope, retention, freshness, and how corrections or deletions propagate.",
    "example": "A briefing remembers the user’s competitor watchlist while retrieving dated pricing snapshots as evidence.",
    "where": "Across runs, with scoped retrieval into the current model context.",
    "when": "Use it for stable preferences and historical context. Reverify changing external facts before treating them as current.",
    "misconception": "A vector database makes an agent remember everything accurately.",
    "question": "How do you correct a bad remembered fact?",
    "answer": "Update or remove the memory, preserve necessary audit history, invalidate affected caches/index entries, and test that future retrieval reflects the correction.",
    "followup": "Should one customer’s preference influence another customer’s run?",
    "strong": "Only appropriately scoped, authorized information should enter the run.",
    "weak": "Memory is whatever the model said previously.",
    "sources": [
      {
        "title": "Anthropic · Long-running harnesses",
        "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
      },
      {
        "title": "Microsoft · Document-level access",
        "url": "https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview"
      }
    ],
    "explain30": "Memory is information intentionally retained and retrieved to help later work. A briefing remembers the user’s competitor watchlist while retrieving dated pricing snapshots as evidence.",
    "explain120": "Start with the definition: Memory is information intentionally retained and retrieved to help later work. Then trace the mechanism: Memory may include user preferences, prior findings, summaries, and learned procedures. Separate it from source evidence and authoritative business records. Decide ownership, scope, retention, freshness, and how corrections or deletions propagate. In this build: A briefing remembers the user’s competitor watchlist while retrieving dated pricing snapshots as evidence. Explain the decision: Use it for stable preferences and historical context. Reverify changing external facts before treating them as current. Close with how you would verify it: Update or remove the memory, preserve necessary audit history, invalidate affected caches/index entries, and test that future retrieval reflects the correction."
  },
  {
    "id": "api",
    "term": "API",
    "category": "APIs & reliability",
    "plain": "An application programming interface is a contract that software uses to interact with other software.",
    "technical": "APIs define available operations, accepted inputs, outputs, and behavior. A web API commonly uses HTTP, but APIs can also be local library calls. An agent-facing tool may wrap several API requests and add domain validation.",
    "example": "A CRM API retrieves an account; a model-facing account_brief tool can combine it with approved enrichments.",
    "where": "At the boundary between your application and another component or service.",
    "when": "Use direct API integration when you control a small number of services and need precise domain behavior. MCP can standardize how agent applications discover and invoke capabilities.",
    "misconception": "Every API is an MCP server or a REST endpoint.",
    "question": "What information do you need before integrating a vendor API?",
    "answer": "Operations, authentication, permissions, schemas, pagination, rate limits, errors, versioning, costs, and data-use constraints.",
    "followup": "Why wrap an API endpoint instead of exposing it directly to the model?",
    "strong": "The wrapper translates a business task into constrained service calls and normalizes results.",
    "weak": "An API is a URL the AI can visit.",
    "sources": [
      {
        "title": "MDN · API",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/API"
      },
      {
        "title": "MDN · HTTP overview",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview"
      }
    ],
    "explain30": "An application programming interface is a contract that software uses to interact with other software. A CRM API retrieves an account; a model-facing account_brief tool can combine it with approved enrichments.",
    "explain120": "Start with the definition: An application programming interface is a contract that software uses to interact with other software. Then trace the mechanism: APIs define available operations, accepted inputs, outputs, and behavior. A web API commonly uses HTTP, but APIs can also be local library calls. An agent-facing tool may wrap several API requests and add domain validation. In this build: A CRM API retrieves an account; a model-facing account_brief tool can combine it with approved enrichments. Explain the decision: Use direct API integration when you control a small number of services and need precise domain behavior. MCP can standardize how agent applications discover and invoke capabilities. Close with how you would verify it: Operations, authentication, permissions, schemas, pagination, rate limits, errors, versioning, costs, and data-use constraints."
  },
  {
    "id": "http-endpoint",
    "term": "HTTP, endpoints & status codes",
    "category": "APIs & reliability",
    "plain": "HTTP exchanges requests and responses; an endpoint is an address and operation exposed by a service.",
    "technical": "A request has a method, URL, headers, and sometimes a body. A response has status, headers, and a body. GET usually reads; POST often submits or creates; exact semantics come from the API contract. Distinguish authentication, authorization, rate-limit, validation, and server failures.",
    "example": "POST /retrieve with a JSON query can return evidence; HTTP 401 means valid authentication is missing, while 429 asks the client to slow down.",
    "where": "On the wire between the API client and server.",
    "when": "Inspect status and response schemas before using results. Use HTTPS for remote sensitive traffic and explicit timeouts.",
    "misconception": "HTTP 200 means the model’s final answer is factually correct.",
    "question": "A 200 response contains an empty evidence array. Is that a tool failure?",
    "answer": "Not necessarily. It may be a successful search with no matches. Preserve that distinction from a timeout or access error.",
    "followup": "Which errors would you retry and which require a different action?",
    "strong": "I classify failures and retry only those that can be safely retried within budget.",
    "weak": "I retry any non-200 response until it works.",
    "sources": [
      {
        "title": "MDN · HTTP overview",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview"
      },
      {
        "title": "MDN · HTTP authentication",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication"
      },
      {
        "title": "MDN · 429 Too Many Requests",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429"
      }
    ],
    "explain30": "HTTP exchanges requests and responses; an endpoint is an address and operation exposed by a service. POST /retrieve with a JSON query can return evidence; HTTP 401 means valid authentication is missing, while 429 asks the client to slow down.",
    "explain120": "Start with the definition: HTTP exchanges requests and responses; an endpoint is an address and operation exposed by a service. Then trace the mechanism: A request has a method, URL, headers, and sometimes a body. A response has status, headers, and a body. GET usually reads; POST often submits or creates; exact semantics come from the API contract. Distinguish authentication, authorization, rate-limit, validation, and server failures. In this build: POST /retrieve with a JSON query can return evidence; HTTP 401 means valid authentication is missing, while 429 asks the client to slow down. Explain the decision: Inspect status and response schemas before using results. Use HTTPS for remote sensitive traffic and explicit timeouts. Close with how you would verify it: Not necessarily. It may be a successful search with no matches. Preserve that distinction from a timeout or access error."
  },
  {
    "id": "json-schema",
    "term": "JSON & schemas",
    "category": "APIs & reliability",
    "plain": "JSON is a data format. A schema describes which structures and values are valid.",
    "technical": "JSON distinguishes objects, arrays, strings, numbers, booleans, and null. A schema can require fields, constrain types and lengths, and reject extra properties. The endpoint schema, MCP inputSchema, and model tool schema may describe related but different interfaces.",
    "example": "retrieve_knowledge accepts exactly a nonempty query string; it rejects an unexpected principal or arbitrary filename.",
    "where": "At every untrusted input boundary and before consuming outputs.",
    "when": "Validate server-side even when a model or UI claims to enforce the same schema. Use domain validation for rules a type system cannot express.",
    "misconception": "Schema validation also checks truth, permissions, and business suitability.",
    "question": "Why reject additionalProperties for a narrow retrieval tool?",
    "answer": "It prevents callers from smuggling unsupported controls; authorization still must be derived in trusted code.",
    "followup": "Can a schema-valid URL still be unsafe to fetch?",
    "strong": "Yes. Validate destination policy and network boundaries separately.",
    "weak": "If it is valid JSON, it is safe to run.",
    "sources": [
      {
        "title": "JSON Schema · Understanding JSON Schema",
        "url": "https://json-schema.org/understanding-json-schema"
      },
      {
        "title": "MCP · Tools, 2026-07-28",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
      }
    ],
    "explain30": "JSON is a data format. A schema describes which structures and values are valid. retrieve_knowledge accepts exactly a nonempty query string; it rejects an unexpected principal or arbitrary filename.",
    "explain120": "Start with the definition: JSON is a data format. A schema describes which structures and values are valid. Then trace the mechanism: JSON distinguishes objects, arrays, strings, numbers, booleans, and null. A schema can require fields, constrain types and lengths, and reject extra properties. The endpoint schema, MCP inputSchema, and model tool schema may describe related but different interfaces. In this build: retrieve_knowledge accepts exactly a nonempty query string; it rejects an unexpected principal or arbitrary filename. Explain the decision: Validate server-side even when a model or UI claims to enforce the same schema. Use domain validation for rules a type system cannot express. Close with how you would verify it: It prevents callers from smuggling unsupported controls; authorization still must be derived in trusted code."
  },
  {
    "id": "sdk",
    "term": "SDK",
    "category": "APIs & reliability",
    "plain": "A software development kit is a library and supporting tools that make an API or protocol easier to use.",
    "technical": "An SDK wraps request construction, serialization, types, transport, and sometimes retries or authentication helpers. It does not remove the underlying network contract. Pin the tested version and inspect defaults such as retry counts and timeouts.",
    "example": "The MCP Python SDK handles protocol messages while your retrieval function still validates the domain request and enforces access.",
    "where": "Inside the application implementing a client or server.",
    "when": "Use a maintained official SDK when it reduces protocol boilerplate. Understand the wire behavior for debugging and compatibility.",
    "misconception": "Installing an SDK grants access to a service or proves an integration works.",
    "question": "What would you inspect when an SDK call hangs?",
    "answer": "Timeout settings, retries, network connectivity, credentials, request IDs, service response, and the protocol/version being used.",
    "followup": "Why record SDK and protocol versions separately?",
    "strong": "A package version and a negotiated wire-protocol revision identify different compatibility layers.",
    "weak": "The SDK is an API key with convenience functions.",
    "sources": [
      {
        "title": "MDN · API",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/API"
      },
      {
        "title": "MCP · Transport bindings",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/basic/transports"
      }
    ],
    "explain30": "A software development kit is a library and supporting tools that make an API or protocol easier to use. The MCP Python SDK handles protocol messages while your retrieval function still validates the domain request and enforces access.",
    "explain120": "Start with the definition: A software development kit is a library and supporting tools that make an API or protocol easier to use. Then trace the mechanism: An SDK wraps request construction, serialization, types, transport, and sometimes retries or authentication helpers. It does not remove the underlying network contract. Pin the tested version and inspect defaults such as retry counts and timeouts. In this build: The MCP Python SDK handles protocol messages while your retrieval function still validates the domain request and enforces access. Explain the decision: Use a maintained official SDK when it reduces protocol boilerplate. Understand the wire behavior for debugging and compatibility. Close with how you would verify it: Timeout settings, retries, network connectivity, credentials, request IDs, service response, and the protocol/version being used."
  },
  {
    "id": "webhooks-polling",
    "term": "Webhooks & polling",
    "category": "APIs & reliability",
    "plain": "Polling asks repeatedly for updates; a webhook pushes an event to a registered receiver when something happens.",
    "technical": "Polling needs an interval, cursor or watermark, overlap for late arrivals, and deduplication. Webhooks need authentication/signature checks, replay protection, durable receipt, retries, and handling for duplicates or out-of-order delivery. Events may signal that you should fetch the authoritative record.",
    "example": "A CRM webhook starts research after an account changes; a pricing monitor polls sources that do not offer events.",
    "where": "At the trigger boundary of a long-running workflow.",
    "when": "Use webhooks when reliable events exist; use polling when the source only supports reads. Often use reconciliation polling even with events.",
    "misconception": "One webhook delivery means one unique business event, exactly once.",
    "question": "How would you process the same event twice without duplicate outreach?",
    "answer": "Persist a stable event/action key, make processing idempotent, and reconcile the external action before retrying.",
    "followup": "When should the polling watermark advance?",
    "strong": "After durable processing; overlap the window and deduplicate late or repeated items.",
    "weak": "I schedule the script hourly and trust the timestamps.",
    "sources": [
      {
        "title": "GitHub · About webhooks",
        "url": "https://docs.github.com/en/webhooks/about-webhooks"
      },
      {
        "title": "Temporal · Workflow execution",
        "url": "https://docs.temporal.io/workflow-execution"
      },
      {
        "title": "MDN · Idempotency",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent"
      }
    ],
    "explain30": "Polling asks repeatedly for updates; a webhook pushes an event to a registered receiver when something happens. A CRM webhook starts research after an account changes; a pricing monitor polls sources that do not offer events.",
    "explain120": "Start with the definition: Polling asks repeatedly for updates; a webhook pushes an event to a registered receiver when something happens. Then trace the mechanism: Polling needs an interval, cursor or watermark, overlap for late arrivals, and deduplication. Webhooks need authentication/signature checks, replay protection, durable receipt, retries, and handling for duplicates or out-of-order delivery. Events may signal that you should fetch the authoritative record. In this build: A CRM webhook starts research after an account changes; a pricing monitor polls sources that do not offer events. Explain the decision: Use webhooks when reliable events exist; use polling when the source only supports reads. Often use reconciliation polling even with events. Close with how you would verify it: Persist a stable event/action key, make processing idempotent, and reconcile the external action before retrying."
  },
  {
    "id": "authentication",
    "term": "Authentication & API keys",
    "category": "APIs & reliability",
    "plain": "Authentication establishes who or what is making a request. An API key is one possible credential.",
    "technical": "A key may identify an application, user, or service account depending on the provider. Keep secrets in an appropriate server-side secret store, redact logs, and rotate/revoke them. Authentication alone does not define which records or actions are allowed.",
    "example": "The demo API checks a local test credential before allowing reads; the deployed service would validate real identity and tenant context.",
    "where": "Before service requests are authorized and executed.",
    "when": "Choose the provider-supported mechanism and avoid exposing credentials in prompts, source repositories, browser code, or URL query strings.",
    "misconception": "A valid key means the caller can access all customer data.",
    "question": "Why is an API key in a browser bundle a problem?",
    "answer": "Visitors can inspect the bundle and reuse the credential; a trusted backend should enforce the intended operation and caller permissions.",
    "followup": "How do you prove the identity belongs to the correct tenant?",
    "strong": "I validate the credential and bind a verified principal to tenant-scoped authorization checks.",
    "weak": "I hide the key in a frontend variable.",
    "sources": [
      {
        "title": "MDN · HTTP authentication",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication"
      },
      {
        "title": "MCP · HTTP authorization",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization"
      }
    ],
    "explain30": "Authentication establishes who or what is making a request. An API key is one possible credential. The demo API checks a local test credential before allowing reads; the deployed service would validate real identity and tenant context.",
    "explain120": "Start with the definition: Authentication establishes who or what is making a request. An API key is one possible credential. Then trace the mechanism: A key may identify an application, user, or service account depending on the provider. Keep secrets in an appropriate server-side secret store, redact logs, and rotate/revoke them. Authentication alone does not define which records or actions are allowed. In this build: The demo API checks a local test credential before allowing reads; the deployed service would validate real identity and tenant context. Explain the decision: Choose the provider-supported mechanism and avoid exposing credentials in prompts, source repositories, browser code, or URL query strings. Close with how you would verify it: Visitors can inspect the bundle and reuse the credential; a trusted backend should enforce the intended operation and caller permissions."
  },
  {
    "id": "authorization",
    "term": "Authorization & scopes",
    "category": "APIs & reliability",
    "plain": "Authorization decides which actions and data an authenticated caller may access. Scopes describe requested or granted permission categories.",
    "technical": "Enforce access on the server using trusted identity, tenant boundaries, resource ownership, and current policy. A scope such as accounts:read may still require record-level checks. Apply the same rules to retrieval, tools, caches, logs, and final citations.",
    "example": "A user may research accounts in their workspace but cannot retrieve another tenant’s documents or send email without that capability.",
    "where": "At service, tool, and data-access boundaries—not only in the UI or prompt.",
    "when": "Grant the capabilities required by the workflow, and separate read, draft, and execute permissions.",
    "misconception": "A tool’s description or readOnly annotation is an enforcement boundary.",
    "question": "Can the model choose tenant_id or principal freely?",
    "answer": "No. Trusted code derives the caller’s authority; model arguments may select an allowed resource but cannot grant authority.",
    "followup": "What happens after a user loses access to a cached document?",
    "strong": "Recheck access and invalidate or scope caches so revoked content cannot leak into context.",
    "weak": "The prompt says to respect permissions, so access is handled.",
    "sources": [
      {
        "title": "Microsoft · Document-level access",
        "url": "https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview"
      },
      {
        "title": "MCP · Tools, 2026-07-28",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
      },
      {
        "title": "MCP · HTTP authorization",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization"
      }
    ],
    "explain30": "Authorization decides which actions and data an authenticated caller may access. Scopes describe requested or granted permission categories. A user may research accounts in their workspace but cannot retrieve another tenant’s documents or send email without that capability.",
    "explain120": "Start with the definition: Authorization decides which actions and data an authenticated caller may access. Scopes describe requested or granted permission categories. Then trace the mechanism: Enforce access on the server using trusted identity, tenant boundaries, resource ownership, and current policy. A scope such as accounts:read may still require record-level checks. Apply the same rules to retrieval, tools, caches, logs, and final citations. In this build: A user may research accounts in their workspace but cannot retrieve another tenant’s documents or send email without that capability. Explain the decision: Grant the capabilities required by the workflow, and separate read, draft, and execute permissions. Close with how you would verify it: No. Trusted code derives the caller’s authority; model arguments may select an allowed resource but cannot grant authority."
  },
  {
    "id": "oauth",
    "term": "OAuth & delegated access",
    "category": "APIs & reliability",
    "plain": "OAuth is a framework for authorizing an application to access a protected service without giving that application the user’s password.",
    "technical": "A client obtains access tokens from an authorization server for a resource server and permitted scopes. Token audience, issuer, expiry, and scope matter. OAuth is not itself a generic statement of user identity; identity protocols such as OpenID Connect add that role.",
    "example": "A remote MCP client obtains a token intended for that MCP server; the server separately manages access to any downstream CRM.",
    "where": "Between the application, authorization server, user consent flow, and protected resource.",
    "when": "Use it for delegated access where supported; keep refresh tokens confidential and use appropriate modern flows such as authorization code with PKCE.",
    "misconception": "You can forward the MCP bearer token to any downstream service.",
    "question": "Why must a resource server validate token audience?",
    "answer": "A valid token issued for a different resource must not become authority here. Token passthrough can cross unintended trust boundaries.",
    "followup": "What is the difference between a 401 and insufficient permission?",
    "strong": "I validate authentication first and then check scope and record-level authorization.",
    "weak": "OAuth is an encrypted password sent with every request.",
    "sources": [
      {
        "title": "MCP · HTTP authorization",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization"
      },
      {
        "title": "MDN · HTTP authentication",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication"
      }
    ],
    "explain30": "OAuth is a framework for authorizing an application to access a protected service without giving that application the user’s password. A remote MCP client obtains a token intended for that MCP server; the server separately manages access to any downstream CRM.",
    "explain120": "Start with the definition: OAuth is a framework for authorizing an application to access a protected service without giving that application the user’s password. Then trace the mechanism: A client obtains access tokens from an authorization server for a resource server and permitted scopes. Token audience, issuer, expiry, and scope matter. OAuth is not itself a generic statement of user identity; identity protocols such as OpenID Connect add that role. In this build: A remote MCP client obtains a token intended for that MCP server; the server separately manages access to any downstream CRM. Explain the decision: Use it for delegated access where supported; keep refresh tokens confidential and use appropriate modern flows such as authorization code with PKCE. Close with how you would verify it: A valid token issued for a different resource must not become authority here. Token passthrough can cross unintended trust boundaries."
  },
  {
    "id": "rate-limit",
    "term": "Rate limits & throughput",
    "category": "APIs & reliability",
    "plain": "A rate limit restricts request volume over time. Throughput is useful work completed per unit of time.",
    "technical": "A system can be constrained by request quotas, token limits, concurrency, tool latency, or human review capacity. A 429 response may include Retry-After. Use queues, bounded concurrency, and backoff rather than amplifying failures.",
    "example": "Researching 1,000 accounts faster is useless if reviewers can approve only 30 drafts or targeting quality collapses.",
    "where": "Across provider APIs, workers, model calls, and human handoffs.",
    "when": "Optimize the actual bottleneck and measure completed acceptable outcomes, not just generated outputs.",
    "misconception": "More parallel calls always increase end-to-end throughput.",
    "question": "What would you do after a provider sends 429?",
    "answer": "Respect the provider’s retry guidance, reduce request rate, queue work, and stop when the deadline or retry budget is exhausted.",
    "followup": "How would you distinguish API throughput from business throughput?",
    "strong": "I track accepted outputs and downstream conversions alongside service latency and utilization.",
    "weak": "I add more agents until requests finish faster.",
    "sources": [
      {
        "title": "MDN · 429 Too Many Requests",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429"
      },
      {
        "title": "Anthropic · Agent evaluations",
        "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
      }
    ],
    "explain30": "A rate limit restricts request volume over time. Throughput is useful work completed per unit of time. Researching 1,000 accounts faster is useless if reviewers can approve only 30 drafts or targeting quality collapses.",
    "explain120": "Start with the definition: A rate limit restricts request volume over time. Throughput is useful work completed per unit of time. Then trace the mechanism: A system can be constrained by request quotas, token limits, concurrency, tool latency, or human review capacity. A 429 response may include Retry-After. Use queues, bounded concurrency, and backoff rather than amplifying failures. In this build: Researching 1,000 accounts faster is useless if reviewers can approve only 30 drafts or targeting quality collapses. Explain the decision: Optimize the actual bottleneck and measure completed acceptable outcomes, not just generated outputs. Close with how you would verify it: Respect the provider’s retry guidance, reduce request rate, queue work, and stop when the deadline or retry budget is exhausted."
  },
  {
    "id": "timeout-retry",
    "term": "Timeouts, retries & backoff",
    "category": "APIs & reliability",
    "plain": "A timeout limits how long you wait; a retry attempts an operation again after a failure.",
    "technical": "A timeout does not prove an operation failed at the server. Distinguish safe reads, explicit validation errors, rate limits, and ambiguous writes. Bound retry count and total deadline, add backoff/jitter where suitable, and preserve the original action identity.",
    "example": "An email request times out after submission: check provider status before sending again. A failed read can often be retried within budget.",
    "where": "In adapters and the execution harness.",
    "when": "Use retries for transient failures only when their semantics are understood. Escalate or reconcile uncertain external writes.",
    "misconception": "Retrying is always harmless because the client never received success.",
    "question": "What is the correct result after a network timeout on a write?",
    "answer": "An uncertain status until reconciliation establishes whether it happened; do not label it an empty result or automatically repeat it.",
    "followup": "What if the provider has no status endpoint or idempotency support?",
    "strong": "I pause the ambiguous action and surface it for resolution rather than risk a duplicate.",
    "weak": "Timeout means failed, so send the same action again.",
    "sources": [
      {
        "title": "MDN · Idempotency",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent"
      },
      {
        "title": "MDN · 429 Too Many Requests",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429"
      },
      {
        "title": "Temporal · Workflow execution",
        "url": "https://docs.temporal.io/workflow-execution"
      }
    ],
    "explain30": "A timeout limits how long you wait; a retry attempts an operation again after a failure. An email request times out after submission: check provider status before sending again. A failed read can often be retried within budget.",
    "explain120": "Start with the definition: A timeout limits how long you wait; a retry attempts an operation again after a failure. Then trace the mechanism: A timeout does not prove an operation failed at the server. Distinguish safe reads, explicit validation errors, rate limits, and ambiguous writes. Bound retry count and total deadline, add backoff/jitter where suitable, and preserve the original action identity. In this build: An email request times out after submission: check provider status before sending again. A failed read can often be retried within budget. Explain the decision: Use retries for transient failures only when their semantics are understood. Escalate or reconcile uncertain external writes. Close with how you would verify it: An uncertain status until reconciliation establishes whether it happened; do not label it an empty result or automatically repeat it."
  },
  {
    "id": "idempotency",
    "term": "Idempotency",
    "category": "APIs & reliability",
    "plain": "An operation is idempotent when repeating the same intended operation has the same intended effect as doing it once.",
    "technical": "Idempotency is a property of semantics, not identical response text. Stable action keys can let a provider deduplicate repeated writes. Your application also needs a durable ledger and reconciliation for uncertain outcomes. A newly generated key on every retry defeats the purpose.",
    "example": "A daily briefing delivery uses one stable key for recipient + briefing edition; a retry should not send a second copy.",
    "where": "At side-effect boundaries and job retry handlers.",
    "when": "Use idempotent operations or provider-supported keys for retried actions; verify retention windows and behavior for repeated keys.",
    "misconception": "A JSON-RPC request ID or run ID automatically guarantees exactly-once side effects.",
    "question": "Why can two identical POST requests create two CRM records?",
    "answer": "POST is not inherently idempotent; the service must implement deduplication or a stable resource/action contract.",
    "followup": "What should be stored before and after an external write?",
    "strong": "Persist action intent and a stable key, then the provider receipt/status; reconcile crashes between those steps.",
    "weak": "I tell the model to never send duplicates.",
    "sources": [
      {
        "title": "MDN · Idempotency",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent"
      },
      {
        "title": "Temporal · Workflow execution",
        "url": "https://docs.temporal.io/workflow-execution"
      }
    ],
    "explain30": "An operation is idempotent when repeating the same intended operation has the same intended effect as doing it once. A daily briefing delivery uses one stable key for recipient + briefing edition; a retry should not send a second copy.",
    "explain120": "Start with the definition: An operation is idempotent when repeating the same intended operation has the same intended effect as doing it once. Then trace the mechanism: Idempotency is a property of semantics, not identical response text. Stable action keys can let a provider deduplicate repeated writes. Your application also needs a durable ledger and reconciliation for uncertain outcomes. A newly generated key on every retry defeats the purpose. In this build: A daily briefing delivery uses one stable key for recipient + briefing edition; a retry should not send a second copy. Explain the decision: Use idempotent operations or provider-supported keys for retried actions; verify retention windows and behavior for repeated keys. Close with how you would verify it: POST is not inherently idempotent; the service must implement deduplication or a stable resource/action contract."
  },
  {
    "id": "mcp",
    "term": "Model Context Protocol (MCP)",
    "category": "MCP",
    "plain": "MCP is a protocol that lets AI applications discover and use capabilities supplied by servers through a common interface.",
    "technical": "It standardizes messages for tools, resources, prompts, and related features. It does not supply a reasoning model, choose your workflow, guarantee correct answers, or replace the business API behind a tool. The host can translate MCP tool definitions into its model provider’s separate tool-calling format.",
    "example": "A research server exposes retrieve_knowledge through MCP so multiple compatible hosts can reuse the same capability.",
    "where": "Between an AI application’s MCP client and a capability server.",
    "when": "Use it when reusable discovery and interoperability across hosts are valuable. A direct API wrapper may be simpler for one tightly controlled integration.",
    "misconception": "MCP is an agent framework, a model API, or a new name for REST.",
    "question": "Where does MCP stop and the agent harness begin?",
    "answer": "MCP defines the integration exchange; the harness decides what to expose, whether to execute, how to manage context/state, and how to evaluate the result.",
    "followup": "What would you lose by using a direct API instead?",
    "strong": "I would implement my own capability registration/adapter conventions; I may accept that for a small integration.",
    "weak": "MCP makes APIs autonomous and secure automatically.",
    "sources": [
      {
        "title": "MCP · Architecture, 2026-07-28",
        "url": "https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture"
      },
      {
        "title": "MCP · Tools",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
      }
    ],
    "explain30": "MCP is a protocol that lets AI applications discover and use capabilities supplied by servers through a common interface. A research server exposes retrieve_knowledge through MCP so multiple compatible hosts can reuse the same capability.",
    "explain120": "Start with the definition: MCP is a protocol that lets AI applications discover and use capabilities supplied by servers through a common interface. Then trace the mechanism: It standardizes messages for tools, resources, prompts, and related features. It does not supply a reasoning model, choose your workflow, guarantee correct answers, or replace the business API behind a tool. The host can translate MCP tool definitions into its model provider’s separate tool-calling format. In this build: A research server exposes retrieve_knowledge through MCP so multiple compatible hosts can reuse the same capability. Explain the decision: Use it when reusable discovery and interoperability across hosts are valuable. A direct API wrapper may be simpler for one tightly controlled integration. Close with how you would verify it: MCP defines the integration exchange; the harness decides what to expose, whether to execute, how to manage context/state, and how to evaluate the result."
  },
  {
    "id": "mcp-host",
    "term": "MCP host",
    "category": "MCP",
    "plain": "The host is the AI application that manages MCP clients and uses the capabilities they expose.",
    "technical": "The host owns the user interaction and coordinates model calls, context selection, policy, and one or more client connections. It can choose which discovered tools reach the model and validate actions before execution. The host is not the remote tool server or the language model itself.",
    "example": "The fieldguide’s runnable client script demonstrates protocol access; a full research application would wrap it with the model loop and review UI.",
    "where": "The outer application containing the model integration and MCP clients.",
    "when": "Design host policy explicitly: tool allowlists, user permissions, context limits, review, and error handling.",
    "misconception": "The model directly connects to every MCP server and manages credentials.",
    "question": "Who decides whether a discovered send_email tool becomes available to the model?",
    "answer": "The host’s policy and user authorization determine exposure and execution; discovery is not permission.",
    "followup": "How would two servers with a tool named search be distinguished?",
    "strong": "The host keeps stable server identities and maps names without relying on untrusted display names alone.",
    "weak": "Any discovered tool should be passed to the model unchanged.",
    "sources": [
      {
        "title": "MCP · Architecture, 2026-07-28",
        "url": "https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture"
      },
      {
        "title": "MCP · Tools",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
      }
    ],
    "explain30": "The host is the AI application that manages MCP clients and uses the capabilities they expose. The fieldguide’s runnable client script demonstrates protocol access; a full research application would wrap it with the model loop and review UI.",
    "explain120": "Start with the definition: The host is the AI application that manages MCP clients and uses the capabilities they expose. Then trace the mechanism: The host owns the user interaction and coordinates model calls, context selection, policy, and one or more client connections. It can choose which discovered tools reach the model and validate actions before execution. The host is not the remote tool server or the language model itself. In this build: The fieldguide’s runnable client script demonstrates protocol access; a full research application would wrap it with the model loop and review UI. Explain the decision: Design host policy explicitly: tool allowlists, user permissions, context limits, review, and error handling. Close with how you would verify it: The host’s policy and user authorization determine exposure and execution; discovery is not permission."
  },
  {
    "id": "mcp-client",
    "term": "MCP client",
    "category": "MCP",
    "plain": "An MCP client is the host-side component that communicates with an MCP server.",
    "technical": "It handles protocol requests, transport, compatible versions, capability discovery, and response interpretation. In the 2026-07-28 protocol, requests carry required metadata; older revisions use an initialization handshake. SDKs can hide these details, so inspect the negotiated version when debugging.",
    "example": "A Python Client launches a local server over stdio, lists its tools, calls retrieve_knowledge, and receives evidence.",
    "where": "Inside the host, across the protocol boundary to one server.",
    "when": "Use the official SDK and pin the tested version; treat protocol compatibility and application permissions as separate concerns.",
    "misconception": "The MCP client is necessarily a user-facing chat app or the model itself.",
    "question": "Can an MCP client call a tool without any LLM?",
    "answer": "Yes. A normal program can discover and invoke tools; a model is only one possible decision-maker above the protocol.",
    "followup": "How would you prove your MCP integration works before introducing a model?",
    "strong": "Run a real client/server round trip with known input and validate the returned evidence and errors.",
    "weak": "If the chatbot mentions the tool, the integration is working.",
    "sources": [
      {
        "title": "MCP · Architecture, 2026-07-28",
        "url": "https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture"
      },
      {
        "title": "MCP · Discovery",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/discover"
      },
      {
        "title": "MCP · Legacy lifecycle, 2025-11-25",
        "url": "https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle"
      }
    ],
    "explain30": "An MCP client is the host-side component that communicates with an MCP server. A Python Client launches a local server over stdio, lists its tools, calls retrieve_knowledge, and receives evidence.",
    "explain120": "Start with the definition: An MCP client is the host-side component that communicates with an MCP server. Then trace the mechanism: It handles protocol requests, transport, compatible versions, capability discovery, and response interpretation. In the 2026-07-28 protocol, requests carry required metadata; older revisions use an initialization handshake. SDKs can hide these details, so inspect the negotiated version when debugging. In this build: A Python Client launches a local server over stdio, lists its tools, calls retrieve_knowledge, and receives evidence. Explain the decision: Use the official SDK and pin the tested version; treat protocol compatibility and application permissions as separate concerns. Close with how you would verify it: Yes. A normal program can discover and invoke tools; a model is only one possible decision-maker above the protocol."
  },
  {
    "id": "mcp-server",
    "term": "MCP server",
    "category": "MCP",
    "plain": "An MCP server is a program that exposes capabilities through MCP, whether it runs locally or remotely.",
    "technical": "It advertises supported features and handles operations such as tools/call or resources/read. Its implementation may query a database, wrap an HTTP API, read approved files, or compute a result. It must validate requests and enforce its own access boundary; host checks are not sufficient by themselves.",
    "example": "A research MCP server wraps the same read-only retrieval function used by the direct HTTP API.",
    "where": "Between the MCP client and underlying data/services.",
    "when": "Build a narrow server around stable domain capabilities. Avoid exposing a generic shell or arbitrary database access when a scoped operation suffices.",
    "misconception": "Server means a cloud machine, and local stdio has no trust boundary.",
    "question": "Where should a downstream CRM credential live?",
    "answer": "In the trusted server/adapter or delegated credential flow appropriate to the deployment; not in a model-visible tool argument.",
    "followup": "Can a malicious local server read files available to its process?",
    "strong": "Yes. Local process permissions matter; inspect and constrain the server you launch.",
    "weak": "Because it is local, it is automatically safe.",
    "sources": [
      {
        "title": "MCP · Architecture, 2026-07-28",
        "url": "https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture"
      },
      {
        "title": "MCP · Transport bindings",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/basic/transports"
      },
      {
        "title": "MCP · HTTP authorization",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization"
      }
    ],
    "explain30": "An MCP server is a program that exposes capabilities through MCP, whether it runs locally or remotely. A research MCP server wraps the same read-only retrieval function used by the direct HTTP API.",
    "explain120": "Start with the definition: An MCP server is a program that exposes capabilities through MCP, whether it runs locally or remotely. Then trace the mechanism: It advertises supported features and handles operations such as tools/call or resources/read. Its implementation may query a database, wrap an HTTP API, read approved files, or compute a result. It must validate requests and enforce its own access boundary; host checks are not sufficient by themselves. In this build: A research MCP server wraps the same read-only retrieval function used by the direct HTTP API. Explain the decision: Build a narrow server around stable domain capabilities. Avoid exposing a generic shell or arbitrary database access when a scoped operation suffices. Close with how you would verify it: In the trusted server/adapter or delegated credential flow appropriate to the deployment; not in a model-visible tool argument."
  },
  {
    "id": "mcp-tools",
    "term": "MCP tools",
    "category": "MCP",
    "plain": "Tools are callable operations a server exposes, with names, descriptions, and input schemas.",
    "technical": "Clients discover them with tools/list and invoke tools/call. inputSchema describes arguments; outputSchema can describe structuredContent. Tool results may include content and isError. Model-controlled describes a common interaction pattern, while the host still controls exposure and execution. An annotation is not an enforcement mechanism.",
    "example": "retrieve_knowledge takes a short query and returns authorized passages with source IDs; send_campaign would be a separate, more consequential capability.",
    "where": "The action interface of an MCP server.",
    "when": "Expose task-shaped operations with clear success and failure semantics. Keep result payloads useful and bounded.",
    "misconception": "A readOnlyHint guarantees that a tool cannot change anything.",
    "question": "What is the difference between a tool execution error and a JSON-RPC protocol error?",
    "answer": "A valid invocation can fail during execution and return isError; malformed or unsupported protocol requests use the protocol error mechanism.",
    "followup": "Why return source dates as structured fields rather than prose only?",
    "strong": "The application can validate and compare them without relying on the model to reparse a narrative.",
    "weak": "Tools are descriptions the model follows; implementation details do not matter.",
    "sources": [
      {
        "title": "MCP · Tools",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
      },
      {
        "title": "MCP · Base protocol",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/basic/index"
      }
    ],
    "explain30": "Tools are callable operations a server exposes, with names, descriptions, and input schemas. retrieve_knowledge takes a short query and returns authorized passages with source IDs; send_campaign would be a separate, more consequential capability.",
    "explain120": "Start with the definition: Tools are callable operations a server exposes, with names, descriptions, and input schemas. Then trace the mechanism: Clients discover them with tools/list and invoke tools/call. inputSchema describes arguments; outputSchema can describe structuredContent. Tool results may include content and isError. Model-controlled describes a common interaction pattern, while the host still controls exposure and execution. An annotation is not an enforcement mechanism. In this build: retrieve_knowledge takes a short query and returns authorized passages with source IDs; send_campaign would be a separate, more consequential capability. Explain the decision: Expose task-shaped operations with clear success and failure semantics. Keep result payloads useful and bounded. Close with how you would verify it: A valid invocation can fail during execution and return isError; malformed or unsupported protocol requests use the protocol error mechanism."
  },
  {
    "id": "mcp-resources",
    "term": "MCP resources",
    "category": "MCP",
    "plain": "Resources are addressable content that a server makes available for an application to read as context.",
    "technical": "resources/list discovers available entries and resources/read retrieves content by URI. A resource URI identifies data; it is not necessarily an internet URL. Resource templates can parameterize addresses. Access still depends on the requesting caller and resource policy.",
    "example": "signaldesk://catalog identifies the approved product catalog, while a search tool finds relevant passages within it.",
    "where": "The context/data interface of an MCP server.",
    "when": "Use a resource for known addressable content. Use a tool when the application needs an operation such as search, calculation, or a state-changing action.",
    "misconception": "Every resource is automatically read into the model’s context, or all resources must be files.",
    "question": "Who chooses which resource contents reach the model?",
    "answer": "The host/application decides how to select and include them, subject to access and context budgets.",
    "followup": "Why not expose the whole CRM as one resource?",
    "strong": "It is too broad for permissions and context; expose scoped records or query capabilities with clear access rules.",
    "weak": "Resources are just a different spelling of tools.",
    "sources": [
      {
        "title": "MCP · Resources",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/resources"
      },
      {
        "title": "MCP · Architecture, 2026-07-28",
        "url": "https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture"
      }
    ],
    "explain30": "Resources are addressable content that a server makes available for an application to read as context. signaldesk://catalog identifies the approved product catalog, while a search tool finds relevant passages within it.",
    "explain120": "Start with the definition: Resources are addressable content that a server makes available for an application to read as context. Then trace the mechanism: resources/list discovers available entries and resources/read retrieves content by URI. A resource URI identifies data; it is not necessarily an internet URL. Resource templates can parameterize addresses. Access still depends on the requesting caller and resource policy. In this build: signaldesk://catalog identifies the approved product catalog, while a search tool finds relevant passages within it. Explain the decision: Use a resource for known addressable content. Use a tool when the application needs an operation such as search, calculation, or a state-changing action. Close with how you would verify it: The host/application decides how to select and include them, subject to access and context budgets."
  },
  {
    "id": "mcp-prompts",
    "term": "MCP prompts",
    "category": "MCP",
    "plain": "MCP prompts are reusable message templates that a server exposes for a client to discover and retrieve.",
    "technical": "prompts/list describes available templates; prompts/get fills a named template with arguments and returns messages. The conventional interaction is user-selected, but the protocol does not prescribe a single UI. Retrieving a prompt does not itself call the model or execute tools.",
    "example": "A research_brief prompt can ask for findings, dated sources, uncertainty, and next actions for a selected topic.",
    "where": "The reusable interaction-template interface of an MCP server.",
    "when": "Use it to share a consistent task entry point across compatible applications; keep enforcement in trusted code.",
    "misconception": "An MCP prompt is always the host’s highest-priority system prompt.",
    "question": "What happens after prompts/get returns messages?",
    "answer": "The host decides how to present or incorporate them; a separate model invocation produces the answer.",
    "followup": "Could a prompt from a server override access rules?",
    "strong": "No. Server text is not authority to expand tool permissions or data access.",
    "weak": "The server prompt controls the host completely.",
    "sources": [
      {
        "title": "MCP · Prompts",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/prompts"
      },
      {
        "title": "MCP · Architecture, 2026-07-28",
        "url": "https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture"
      }
    ],
    "explain30": "MCP prompts are reusable message templates that a server exposes for a client to discover and retrieve. A research_brief prompt can ask for findings, dated sources, uncertainty, and next actions for a selected topic.",
    "explain120": "Start with the definition: MCP prompts are reusable message templates that a server exposes for a client to discover and retrieve. Then trace the mechanism: prompts/list describes available templates; prompts/get fills a named template with arguments and returns messages. The conventional interaction is user-selected, but the protocol does not prescribe a single UI. Retrieving a prompt does not itself call the model or execute tools. In this build: A research_brief prompt can ask for findings, dated sources, uncertainty, and next actions for a selected topic. Explain the decision: Use it to share a consistent task entry point across compatible applications; keep enforcement in trusted code. Close with how you would verify it: The host decides how to present or incorporate them; a separate model invocation produces the answer."
  },
  {
    "id": "mcp-discovery",
    "term": "MCP discovery & versioning",
    "category": "MCP",
    "plain": "Discovery tells a client what a server supports; versioning makes the meaning of their messages explicit.",
    "technical": "For 2026-07-28, servers implement server/discover and requests carry protocolVersion and clientCapabilities in namespaced _meta. Clients may call discover or handle unsupported-version errors. Successful results use resultType. Earlier 2025-11-25 examples use initialize followed by notifications/initialized. Do not mix the two eras in one trace.",
    "example": "The runnable lab reports the protocol version actually used, then lists the available retrieval tool before calling it.",
    "where": "At protocol compatibility and capability-discovery boundaries.",
    "when": "Pin SDK dependencies, record the exercised protocol revision, and test compatibility paths instead of copying undated snippets.",
    "misconception": "MCP has one timeless handshake, so every tutorial’s wire messages can be combined.",
    "question": "Is the self-reported serverInfo name a security identity?",
    "answer": "No. It is useful display/debug information, not proof of who operates the server or what authority it deserves.",
    "followup": "Why might the tool list differ for two authenticated users?",
    "strong": "Their authorization can permit different capabilities; discovery should reflect current permissions.",
    "weak": "The server says it is trusted, so I can skip verification.",
    "sources": [
      {
        "title": "MCP · Discovery",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/discover"
      },
      {
        "title": "MCP · Base protocol",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/basic/index"
      },
      {
        "title": "MCP · Legacy lifecycle, 2025-11-25",
        "url": "https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle"
      }
    ],
    "explain30": "Discovery tells a client what a server supports; versioning makes the meaning of their messages explicit. The runnable lab reports the protocol version actually used, then lists the available retrieval tool before calling it.",
    "explain120": "Start with the definition: Discovery tells a client what a server supports; versioning makes the meaning of their messages explicit. Then trace the mechanism: For 2026-07-28, servers implement server/discover and requests carry protocolVersion and clientCapabilities in namespaced _meta. Clients may call discover or handle unsupported-version errors. Successful results use resultType. Earlier 2025-11-25 examples use initialize followed by notifications/initialized. Do not mix the two eras in one trace. In this build: The runnable lab reports the protocol version actually used, then lists the available retrieval tool before calling it. Explain the decision: Pin SDK dependencies, record the exercised protocol revision, and test compatibility paths instead of copying undated snippets. Close with how you would verify it: No. It is useful display/debug information, not proof of who operates the server or what authority it deserves."
  },
  {
    "id": "mcp-transports",
    "term": "MCP transports: stdio & HTTP",
    "category": "MCP",
    "plain": "A transport carries protocol messages between the client and server.",
    "technical": "Stdio uses newline-delimited messages over a launched process’s standard streams; reserve stdout for protocol traffic and send diagnostics to stderr. Streamable HTTP sends MCP requests to an endpoint and can return JSON or request-scoped SSE streams. Transport affects deployment and authentication, while the protocol defines operation semantics.",
    "example": "Use stdio to learn with a local server; use authenticated Streamable HTTP when a managed service must serve remote clients.",
    "where": "Below MCP method semantics and above process/network delivery.",
    "when": "Choose based on local versus remote deployment, process isolation, authentication, and operating requirements.",
    "misconception": "MCP is always HTTP, or SSE itself is the agent protocol.",
    "question": "Why can a print statement break a stdio server?",
    "answer": "Unexpected stdout text can corrupt the message stream; protocol framing must remain valid.",
    "followup": "Does closing an HTTP response stream undo a tool’s completed side effect?",
    "strong": "No. Cancellation and transport interruption do not guarantee rollback; reconcile action state.",
    "weak": "Changing transports fixes all security and reliability concerns.",
    "sources": [
      {
        "title": "MCP · Transport bindings",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/basic/transports"
      },
      {
        "title": "MCP · HTTP authorization",
        "url": "https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization"
      }
    ],
    "explain30": "A transport carries protocol messages between the client and server. Use stdio to learn with a local server; use authenticated Streamable HTTP when a managed service must serve remote clients.",
    "explain120": "Start with the definition: A transport carries protocol messages between the client and server. Then trace the mechanism: Stdio uses newline-delimited messages over a launched process’s standard streams; reserve stdout for protocol traffic and send diagnostics to stderr. Streamable HTTP sends MCP requests to an endpoint and can return JSON or request-scoped SSE streams. Transport affects deployment and authentication, while the protocol defines operation semantics. In this build: Use stdio to learn with a local server; use authenticated Streamable HTTP when a managed service must serve remote clients. Explain the decision: Choose based on local versus remote deployment, process isolation, authentication, and operating requirements. Close with how you would verify it: Unexpected stdout text can corrupt the message stream; protocol framing must remain valid."
  },
  {
    "id": "rag",
    "term": "RAG",
    "category": "RAG & evidence",
    "plain": "Retrieval-augmented generation supplies relevant external evidence to a model before it answers.",
    "technical": "The pipeline ingests and indexes material, retrieves passages for a question, selects context, generates, and validates the answer. RAG can sit inside a fixed workflow or be a tool used by an agent. It changes the evidence supplied at inference time, not the model’s weights.",
    "example": "A demo agent retrieves current approved product capabilities before writing its personalized walkthrough.",
    "where": "Between source storage/retrieval and model generation.",
    "when": "Use it when answers depend on a changing, private, or large evidence collection. A small supplied document may fit directly in context without a retrieval system.",
    "misconception": "RAG guarantees correctness, eliminates hallucination, or requires a vector database.",
    "question": "How do you distinguish a retrieval failure from a generation failure?",
    "answer": "Inspect whether the necessary passage reached the model. Missing evidence suggests retrieval/ingestion; misuse of present evidence suggests generation or validation.",
    "followup": "What if a query requires two documents but only one is retrieved?",
    "strong": "Evaluate multi-evidence coverage and adjust retrieval/decomposition before changing only the writing prompt.",
    "weak": "I increase prompt strictness for every bad answer.",
    "sources": [
      {
        "title": "Anthropic · Contextual retrieval",
        "url": "https://www.anthropic.com/research/contextual-retrieval"
      },
      {
        "title": "Anthropic · Agent evaluations",
        "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
      }
    ],
    "explain30": "Retrieval-augmented generation supplies relevant external evidence to a model before it answers. A demo agent retrieves current approved product capabilities before writing its personalized walkthrough.",
    "explain120": "Start with the definition: Retrieval-augmented generation supplies relevant external evidence to a model before it answers. Then trace the mechanism: The pipeline ingests and indexes material, retrieves passages for a question, selects context, generates, and validates the answer. RAG can sit inside a fixed workflow or be a tool used by an agent. It changes the evidence supplied at inference time, not the model’s weights. In this build: A demo agent retrieves current approved product capabilities before writing its personalized walkthrough. Explain the decision: Use it when answers depend on a changing, private, or large evidence collection. A small supplied document may fit directly in context without a retrieval system. Close with how you would verify it: Inspect whether the necessary passage reached the model. Missing evidence suggests retrieval/ingestion; misuse of present evidence suggests generation or validation."
  },
  {
    "id": "embeddings",
    "term": "Embeddings",
    "category": "RAG & evidence",
    "plain": "An embedding is a numeric representation that helps compare items by learned similarity.",
    "technical": "An embedding model maps text into vectors; retrieval scores query and document vectors with a compatible similarity measure. Use compatible model/version/dimensions for indexing and queries. Similarity is not truth, freshness, permission, or proof that a passage answers the question.",
    "example": "“Keep data in Europe” may retrieve a passage about an EU hosting region even without identical wording.",
    "where": "In the semantic candidate-retrieval layer.",
    "when": "Use embeddings when paraphrases matter. Evaluate them alongside lexical search for exact codes, names, and numbers.",
    "misconception": "An embedding stores a factual answer or updates the language model’s knowledge.",
    "question": "What changes when you replace the embedding model?",
    "answer": "Usually the index must be re-embedded or migrated with versioned compatibility; compare retrieval quality before switching.",
    "followup": "Why can a semantically similar policy be the wrong policy?",
    "strong": "It may concern a different tenant, product version, date, or jurisdiction; metadata and validation still matter.",
    "weak": "The nearest vector is the correct answer.",
    "sources": [
      {
        "title": "Anthropic · Contextual retrieval",
        "url": "https://www.anthropic.com/research/contextual-retrieval"
      },
      {
        "title": "Microsoft · Document chunking",
        "url": "https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents"
      }
    ],
    "explain30": "An embedding is a numeric representation that helps compare items by learned similarity. “Keep data in Europe” may retrieve a passage about an EU hosting region even without identical wording.",
    "explain120": "Start with the definition: An embedding is a numeric representation that helps compare items by learned similarity. Then trace the mechanism: An embedding model maps text into vectors; retrieval scores query and document vectors with a compatible similarity measure. Use compatible model/version/dimensions for indexing and queries. Similarity is not truth, freshness, permission, or proof that a passage answers the question. In this build: “Keep data in Europe” may retrieve a passage about an EU hosting region even without identical wording. Explain the decision: Use embeddings when paraphrases matter. Evaluate them alongside lexical search for exact codes, names, and numbers. Close with how you would verify it: Usually the index must be re-embedded or migrated with versioned compatibility; compare retrieval quality before switching."
  },
  {
    "id": "chunks-metadata",
    "term": "Chunks, metadata & provenance",
    "category": "RAG & evidence",
    "plain": "A chunk is a retrievable passage; metadata records the context needed to interpret and control it.",
    "technical": "Preserve document identity, heading, original text, URL, dates, version, content hash, and access information. Split on meaningful boundaries where possible and keep tables, units, qualifiers, and footnotes connected. Track lineage so refreshed/deleted sources do not leave orphaned stale chunks.",
    "example": "A price passage needs product tier, currency, billing period, effective date, and its source record.",
    "where": "During ingestion and alongside every retrieved result.",
    "when": "Tune chunk size and overlap on real questions. Use metadata for scope/access/version filters and for claim verification.",
    "misconception": "Shorter chunks always retrieve better, or fetch time is publication time.",
    "question": "A chunk says “revenue grew 18%.” What information is missing?",
    "answer": "Entity, period, comparison basis, units, definition, source, and any qualification needed to interpret the number.",
    "followup": "How do you delete all chunks from a retracted document?",
    "strong": "Keep a stable document ID and chunk lineage; update the index and invalidate affected caches.",
    "weak": "I split every page into fixed character counts and discard the headers.",
    "sources": [
      {
        "title": "Microsoft · Document chunking",
        "url": "https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents"
      },
      {
        "title": "Microsoft · Document-level access",
        "url": "https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview"
      }
    ],
    "explain30": "A chunk is a retrievable passage; metadata records the context needed to interpret and control it. A price passage needs product tier, currency, billing period, effective date, and its source record.",
    "explain120": "Start with the definition: A chunk is a retrievable passage; metadata records the context needed to interpret and control it. Then trace the mechanism: Preserve document identity, heading, original text, URL, dates, version, content hash, and access information. Split on meaningful boundaries where possible and keep tables, units, qualifiers, and footnotes connected. Track lineage so refreshed/deleted sources do not leave orphaned stale chunks. In this build: A price passage needs product tier, currency, billing period, effective date, and its source record. Explain the decision: Tune chunk size and overlap on real questions. Use metadata for scope/access/version filters and for claim verification. Close with how you would verify it: Entity, period, comparison basis, units, definition, source, and any qualification needed to interpret the number."
  },
  {
    "id": "vector-index",
    "term": "Vector database / index",
    "category": "RAG & evidence",
    "plain": "A vector index helps search stored embeddings for similar items; a vector database adds storage and query features around that capability.",
    "technical": "The index is a retrieval component, not the whole knowledge base or the agent’s memory. Maintain original source records, metadata, access rules, and update/delete operations. Approximate nearest-neighbor search trades some retrieval precision for speed; evaluate the resulting candidates.",
    "example": "Store source snapshots separately and use the index to find relevant passages for an account question.",
    "where": "Inside the evidence retrieval service.",
    "when": "Add it when corpus scale and semantic-search needs justify it. A small lexical baseline may be enough to start.",
    "misconception": "Choosing a vector database is equivalent to designing a RAG system.",
    "question": "What would you need to rebuild the index after a model migration?",
    "answer": "Original documents/chunks, metadata, embedding model/version configuration, and a reproducible ingestion process.",
    "followup": "Can a perfect vector search still leak data?",
    "strong": "Yes. Unauthorized candidates or caches can expose content unless access filters are enforced before context assembly.",
    "weak": "The database vendor handles all evidence quality automatically.",
    "sources": [
      {
        "title": "Anthropic · Contextual retrieval",
        "url": "https://www.anthropic.com/research/contextual-retrieval"
      },
      {
        "title": "Microsoft · Document-level access",
        "url": "https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview"
      }
    ],
    "explain30": "A vector index helps search stored embeddings for similar items; a vector database adds storage and query features around that capability. Store source snapshots separately and use the index to find relevant passages for an account question.",
    "explain120": "Start with the definition: A vector index helps search stored embeddings for similar items; a vector database adds storage and query features around that capability. Then trace the mechanism: The index is a retrieval component, not the whole knowledge base or the agent’s memory. Maintain original source records, metadata, access rules, and update/delete operations. Approximate nearest-neighbor search trades some retrieval precision for speed; evaluate the resulting candidates. In this build: Store source snapshots separately and use the index to find relevant passages for an account question. Explain the decision: Add it when corpus scale and semantic-search needs justify it. A small lexical baseline may be enough to start. Close with how you would verify it: Original documents/chunks, metadata, embedding model/version configuration, and a reproducible ingestion process."
  },
  {
    "id": "hybrid-search",
    "term": "Keyword & hybrid retrieval",
    "category": "RAG & evidence",
    "plain": "Keyword retrieval matches textual terms; hybrid retrieval combines lexical and semantic signals.",
    "technical": "Lexical methods are useful for identifiers and exact terminology. Semantic retrieval can recover paraphrases. Hybrid systems merge ranked candidate lists or scores, deduplicate, and may rerank. The combination must be evaluated; adding signals does not guarantee an improvement.",
    "example": "Use lexical matching for a product code and semantic matching for the buyer’s description of a workflow problem.",
    "where": "At candidate generation before final evidence selection.",
    "when": "Compare keyword, vector, and hybrid retrieval using the same labeled questions and constraints.",
    "misconception": "Hybrid means asking two models to write the answer and choosing one.",
    "question": "Why might exact company names need lexical retrieval?",
    "answer": "Embedding similarity can favor related but different entities; exact identifiers and metadata constraints preserve identity.",
    "followup": "How do you prevent duplicate passages from dominating the context?",
    "strong": "Deduplicate by source/section/content and enforce evidence diversity where the task needs it.",
    "weak": "I always use vectors because they are more advanced.",
    "sources": [
      {
        "title": "Anthropic · Contextual retrieval",
        "url": "https://www.anthropic.com/research/contextual-retrieval"
      }
    ],
    "explain30": "Keyword retrieval matches textual terms; hybrid retrieval combines lexical and semantic signals. Use lexical matching for a product code and semantic matching for the buyer’s description of a workflow problem.",
    "explain120": "Start with the definition: Keyword retrieval matches textual terms; hybrid retrieval combines lexical and semantic signals. Then trace the mechanism: Lexical methods are useful for identifiers and exact terminology. Semantic retrieval can recover paraphrases. Hybrid systems merge ranked candidate lists or scores, deduplicate, and may rerank. The combination must be evaluated; adding signals does not guarantee an improvement. In this build: Use lexical matching for a product code and semantic matching for the buyer’s description of a workflow problem. Explain the decision: Compare keyword, vector, and hybrid retrieval using the same labeled questions and constraints. Close with how you would verify it: Embedding similarity can favor related but different entities; exact identifiers and metadata constraints preserve identity."
  },
  {
    "id": "reranking",
    "term": "Reranking",
    "category": "RAG & evidence",
    "plain": "A reranker reorders a set of retrieved candidates by how well they match the question.",
    "technical": "Candidate retrieval is designed for broad, efficient recall. A reranker can spend more computation on a smaller set, often using both query and passage jointly. It cannot rescue evidence that never entered the candidate pool, and its score is not calibrated factual confidence.",
    "example": "Retrieve 20 candidates, then experimentally select five with a reranker before drafting a comparison.",
    "where": "Between initial retrieval and context assembly.",
    "when": "Add it when tests show relevant evidence is present but poorly ordered; measure latency and cost as well as answer quality.",
    "misconception": "A reranker checks whether every answer claim is true.",
    "question": "The needed passage is absent from the top-100 candidates. Will reranking fix that?",
    "answer": "No. Improve ingestion, query formulation, filters, or candidate retrieval first.",
    "followup": "How would you choose top-k?",
    "strong": "Measure evidence coverage and noise against latency/context cost on a held-out set.",
    "weak": "Five passages is always the best number.",
    "sources": [
      {
        "title": "Anthropic · Contextual retrieval",
        "url": "https://www.anthropic.com/research/contextual-retrieval"
      },
      {
        "title": "Anthropic · Agent evaluations",
        "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
      }
    ],
    "explain30": "A reranker reorders a set of retrieved candidates by how well they match the question. Retrieve 20 candidates, then experimentally select five with a reranker before drafting a comparison.",
    "explain120": "Start with the definition: A reranker reorders a set of retrieved candidates by how well they match the question. Then trace the mechanism: Candidate retrieval is designed for broad, efficient recall. A reranker can spend more computation on a smaller set, often using both query and passage jointly. It cannot rescue evidence that never entered the candidate pool, and its score is not calibrated factual confidence. In this build: Retrieve 20 candidates, then experimentally select five with a reranker before drafting a comparison. Explain the decision: Add it when tests show relevant evidence is present but poorly ordered; measure latency and cost as well as answer quality. Close with how you would verify it: No. Improve ingestion, query formulation, filters, or candidate retrieval first."
  },
  {
    "id": "grounding",
    "term": "Grounding, citations & uncertainty",
    "category": "RAG & evidence",
    "plain": "Grounding ties claims to evidence; citations let a reader locate that evidence.",
    "technical": "Validate that a cited source exists, is accessible, and actually supports the specific claim with its qualifiers. A real citation can still be misapplied. Distinguish supported facts, interpretations, contradictions, stale evidence, and missing evidence. Avoid invented confidence percentages.",
    "example": "“Salesforce is planned” supports a roadmap statement; it does not support a demo claiming a released integration.",
    "where": "At synthesis, validation, and the final review interface.",
    "when": "Require claim-level evidence for consequential factual statements and show gaps when the available material does not establish an answer.",
    "misconception": "Any answer with links is trustworthy.",
    "question": "What does the system do when two sources disagree?",
    "answer": "Preserve the disagreement, compare authority and dates, seek a resolving source if useful, and state what remains uncertain.",
    "followup": "How would you test whether a citation supports its claim?",
    "strong": "Use expert-labeled examples and a calibrated entailment check; inspect failures rather than relying only on ID validity.",
    "weak": "I ask the model to add three citations to every answer.",
    "sources": [
      {
        "title": "Anthropic · Agent evaluations",
        "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
      },
      {
        "title": "Anthropic · Contextual retrieval",
        "url": "https://www.anthropic.com/research/contextual-retrieval"
      }
    ],
    "explain30": "Grounding ties claims to evidence; citations let a reader locate that evidence. “Salesforce is planned” supports a roadmap statement; it does not support a demo claiming a released integration.",
    "explain120": "Start with the definition: Grounding ties claims to evidence; citations let a reader locate that evidence. Then trace the mechanism: Validate that a cited source exists, is accessible, and actually supports the specific claim with its qualifiers. A real citation can still be misapplied. Distinguish supported facts, interpretations, contradictions, stale evidence, and missing evidence. Avoid invented confidence percentages. In this build: “Salesforce is planned” supports a roadmap statement; it does not support a demo claiming a released integration. Explain the decision: Require claim-level evidence for consequential factual statements and show gaps when the available material does not establish an answer. Close with how you would verify it: Preserve the disagreement, compare authority and dates, seek a resolving source if useful, and state what remains uncertain."
  },
  {
    "id": "evaluation",
    "term": "Evaluation & held-out cases",
    "category": "Operations",
    "plain": "An evaluation tests whether a system performs the task you intend under defined conditions.",
    "technical": "Separate retrieval, answer support/completeness, tool execution, recovery, and business outcomes. Use representative inputs, explicit graders, negative cases, and held-out cases. Deterministic checks suit schemas and access violations; expert review or calibrated model graders suit nuanced quality.",
    "example": "Test planned features, unknown integrations, stale prices, prompt injection, duplicate events, and tool failures before expanding a sales-agent pilot.",
    "where": "Before releases and continuously as new failure cases appear.",
    "when": "Choose thresholds based on error costs and compare against a baseline. Repeat variable model runs and examine traces.",
    "misconception": "A single overall accuracy percentage proves production readiness.",
    "question": "What is the difference between an output metric and a business metric?",
    "answer": "Supported briefs and tool success describe system behavior; accepted opportunities, retained revenue, and review-adjusted time saved describe value.",
    "followup": "How would you avoid tuning only to the examples you already know?",
    "strong": "Keep a held-out set and add new real-world failure cases without treating passing tests as exhaustive proof.",
    "weak": "If the demo works once, the agent is ready.",
    "sources": [
      {
        "title": "Anthropic · Agent evaluations",
        "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
      }
    ],
    "explain30": "An evaluation tests whether a system performs the task you intend under defined conditions. Test planned features, unknown integrations, stale prices, prompt injection, duplicate events, and tool failures before expanding a sales-agent pilot.",
    "explain120": "Start with the definition: An evaluation tests whether a system performs the task you intend under defined conditions. Then trace the mechanism: Separate retrieval, answer support/completeness, tool execution, recovery, and business outcomes. Use representative inputs, explicit graders, negative cases, and held-out cases. Deterministic checks suit schemas and access violations; expert review or calibrated model graders suit nuanced quality. In this build: Test planned features, unknown integrations, stale prices, prompt injection, duplicate events, and tool failures before expanding a sales-agent pilot. Explain the decision: Choose thresholds based on error costs and compare against a baseline. Repeat variable model runs and examine traces. Close with how you would verify it: Supported briefs and tool success describe system behavior; accepted opportunities, retained revenue, and review-adjusted time saved describe value."
  },
  {
    "id": "observability",
    "term": "Traces & observability",
    "category": "Operations",
    "plain": "A trace records how a run unfolded; observability helps you understand system behavior from its recorded signals.",
    "technical": "Capture task/run IDs, versions, tool arguments/results, evidence references, timings, errors, token use, costs, state transitions, and approval/action receipts. Redact secrets and restrict access to sensitive traces. A trace is evidence about execution, not proof that the business outcome was caused by the agent.",
    "example": "Investigate a false Salesforce claim by following the retrieved source, model response, validator decision, and reviewer edits.",
    "where": "Across the model, tools, data access, worker, and human-review boundaries.",
    "when": "Design logging around the questions you will need to answer during debugging and outcome attribution.",
    "misconception": "A final answer and total token count are enough to debug an agent.",
    "question": "What minimum trace would explain an incorrect pricing comparison?",
    "answer": "The question, retrieved versions/passages, units and dates, calculation inputs, generated claim, checks, and final action.",
    "followup": "How do you avoid logging customer secrets?",
    "strong": "Redact or omit sensitive payloads, use scoped references, and define retention and access controls.",
    "weak": "I store everything forever so debugging is easy.",
    "sources": [
      {
        "title": "Anthropic · Agent evaluations",
        "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
      },
      {
        "title": "Anthropic · Long-running harnesses",
        "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
      }
    ],
    "explain30": "A trace records how a run unfolded; observability helps you understand system behavior from its recorded signals. Investigate a false Salesforce claim by following the retrieved source, model response, validator decision, and reviewer edits.",
    "explain120": "Start with the definition: A trace records how a run unfolded; observability helps you understand system behavior from its recorded signals. Then trace the mechanism: Capture task/run IDs, versions, tool arguments/results, evidence references, timings, errors, token use, costs, state transitions, and approval/action receipts. Redact secrets and restrict access to sensitive traces. A trace is evidence about execution, not proof that the business outcome was caused by the agent. In this build: Investigate a false Salesforce claim by following the retrieved source, model response, validator decision, and reviewer edits. Explain the decision: Design logging around the questions you will need to answer during debugging and outcome attribution. Close with how you would verify it: The question, retrieved versions/passages, units and dates, calculation inputs, generated claim, checks, and final action."
  },
  {
    "id": "queue",
    "term": "Queues & backpressure",
    "category": "Operations",
    "plain": "A queue separates accepting work from processing it; backpressure slows intake or execution when capacity is constrained.",
    "technical": "Workers claim jobs, process them, and acknowledge durable progress. Retries and redelivery can occur, so handlers need stable IDs and idempotent effects. Bound concurrency, use priorities deliberately, and monitor age/backlog rather than only job count.",
    "example": "Research runs enter a queue; provider rate limits or reviewer capacity determine how quickly they advance.",
    "where": "Between triggers and workers, and at human handoffs.",
    "when": "Use queues for bursts, long tasks, and independent retries. Keep a simple synchronous path when work is short and capacity predictable.",
    "misconception": "A queue guarantees exactly-once execution and makes actions safe to retry.",
    "question": "What metric reveals a queue is failing customers even if workers are busy?",
    "answer": "Time waiting and time to an acceptable result, along with missed deadlines and error/retry rates.",
    "followup": "How would large enterprise accounts affect prioritization?",
    "strong": "Use explicit value, urgency, fairness, and service commitments rather than letting raw volume dominate.",
    "weak": "I just increase the number of workers.",
    "sources": [
      {
        "title": "Temporal · Workflow execution",
        "url": "https://docs.temporal.io/workflow-execution"
      },
      {
        "title": "Anthropic · Agent evaluations",
        "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
      }
    ],
    "explain30": "A queue separates accepting work from processing it; backpressure slows intake or execution when capacity is constrained. Research runs enter a queue; provider rate limits or reviewer capacity determine how quickly they advance.",
    "explain120": "Start with the definition: A queue separates accepting work from processing it; backpressure slows intake or execution when capacity is constrained. Then trace the mechanism: Workers claim jobs, process them, and acknowledge durable progress. Retries and redelivery can occur, so handlers need stable IDs and idempotent effects. Bound concurrency, use priorities deliberately, and monitor age/backlog rather than only job count. In this build: Research runs enter a queue; provider rate limits or reviewer capacity determine how quickly they advance. Explain the decision: Use queues for bursts, long tasks, and independent retries. Keep a simple synchronous path when work is short and capacity predictable. Close with how you would verify it: Time waiting and time to an acceptable result, along with missed deadlines and error/retry rates."
  },
  {
    "id": "cache",
    "term": "Caching",
    "category": "Operations",
    "plain": "Caching reuses previously computed or fetched results to reduce latency and cost.",
    "technical": "A cache needs a key, scope, freshness/invalidation policy, and a safe failure mode. Retrieval caches must include relevant identity, tenant, query, filters, and corpus version. Prompt caches reduce repeated model-input work but do not certify the truth of cached content.",
    "example": "Reuse an unchanged public product page by content hash, but recheck current pricing and never share tenant-private retrieval results across users.",
    "where": "At source fetching, retrieval, model input, or application-result layers.",
    "when": "Cache expensive stable work when correctness can be preserved. Invalidate on content, permissions, or model/index version changes as appropriate.",
    "misconception": "A cache hit is always current and authorized.",
    "question": "How can a cache bypass otherwise correct retrieval permissions?",
    "answer": "If the key omits user/tenant scope or results survive revocation, unauthorized content can be returned before access checks run.",
    "followup": "What would your cache key include for a private knowledge query?",
    "strong": "Verified identity or permission scope, tenant, query/filters, source/index version, and relevant policy version.",
    "weak": "I key the cache only by the question text.",
    "sources": [
      {
        "title": "MDN · HTTP caching",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching"
      },
      {
        "title": "Microsoft · Document-level access",
        "url": "https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview"
      }
    ],
    "explain30": "Caching reuses previously computed or fetched results to reduce latency and cost. Reuse an unchanged public product page by content hash, but recheck current pricing and never share tenant-private retrieval results across users.",
    "explain120": "Start with the definition: Caching reuses previously computed or fetched results to reduce latency and cost. Then trace the mechanism: A cache needs a key, scope, freshness/invalidation policy, and a safe failure mode. Retrieval caches must include relevant identity, tenant, query, filters, and corpus version. Prompt caches reduce repeated model-input work but do not certify the truth of cached content. In this build: Reuse an unchanged public product page by content hash, but recheck current pricing and never share tenant-private retrieval results across users. Explain the decision: Cache expensive stable work when correctness can be preserved. Invalidate on content, permissions, or model/index version changes as appropriate. Close with how you would verify it: If the key omits user/tenant scope or results survive revocation, unauthorized content can be returned before access checks run."
  },
  {
    "id": "durable-workflow",
    "term": "Durable & long-running workflows",
    "category": "Operations",
    "plain": "A durable workflow records progress so useful work can continue across restarts, delays, and external events.",
    "technical": "Long-running work needs persisted state, timers, event correlation, versioning, cancellation, retries, and reconciliation. Model context alone cannot provide durability. A workflow engine can replay or resume orchestration, while external side effects still require idempotency or status checks.",
    "example": "An enterprise deal agent researches today, waits for a rep’s approval, schedules a later check, and records whether the opportunity progresses or churns months later.",
    "where": "The business process spanning many model calls and potentially many days.",
    "when": "Use durable execution when tasks outlive a request or worker. Define terminal and waiting states and who owns unresolved exceptions.",
    "misconception": "Keeping an LLM in a loop for hours is the same as durable execution.",
    "question": "What happens if the process dies immediately after sending a message?",
    "answer": "Resume from the action ledger and reconcile the provider’s state; do not assume unsaved local success means the message was never sent.",
    "followup": "How do you measure an outcome that occurs months after the original run?",
    "strong": "Keep stable account/opportunity/run identifiers and dated outcome events; analyze cohorts with their observation windows.",
    "weak": "I keep the whole workflow in the chat history.",
    "sources": [
      {
        "title": "Temporal · Workflow execution",
        "url": "https://docs.temporal.io/workflow-execution"
      },
      {
        "title": "Anthropic · Long-running harnesses",
        "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
      }
    ],
    "explain30": "A durable workflow records progress so useful work can continue across restarts, delays, and external events. An enterprise deal agent researches today, waits for a rep’s approval, schedules a later check, and records whether the opportunity progresses or churns months later.",
    "explain120": "Start with the definition: A durable workflow records progress so useful work can continue across restarts, delays, and external events. Then trace the mechanism: Long-running work needs persisted state, timers, event correlation, versioning, cancellation, retries, and reconciliation. Model context alone cannot provide durability. A workflow engine can replay or resume orchestration, while external side effects still require idempotency or status checks. In this build: An enterprise deal agent researches today, waits for a rep’s approval, schedules a later check, and records whether the opportunity progresses or churns months later. Explain the decision: Use durable execution when tasks outlive a request or worker. Define terminal and waiting states and who owns unresolved exceptions. Close with how you would verify it: Resume from the action ledger and reconcile the provider’s state; do not assume unsaved local success means the message was never sent."
  },
  {
    "id": "fine-tuning",
    "term": "Fine-tuning vs retrieval",
    "category": "RAG & evidence",
    "plain": "Fine-tuning changes a model’s parameters using training examples; retrieval changes the evidence supplied when the model is used.",
    "technical": "Fine-tuning can adapt behavior, format, or task performance, but it does not replace current source access, tenant permissions, or claim verification. RAG can expose updated or private knowledge without training that knowledge into model weights. The two methods can be combined when evaluations justify it.",
    "example": "Use retrieval for current product capabilities and pricing; consider tuning only after a clear recurring behavior problem remains despite better context and prompting.",
    "where": "Fine-tuning is a model-development step; retrieval is part of the runtime evidence path.",
    "when": "Start with a baseline, high-quality context, and evaluations. Use training when you have appropriate examples and a measured reason to change behavior.",
    "misconception": "Fine-tuning is the default way to give an agent today’s company facts.",
    "question": "Why would current pricing be a poor reason to retrain on every change?",
    "answer": "Source updates and retrieval are easier to version, inspect, revoke, and cite; training does not inherently preserve provenance or freshness.",
    "followup": "What evidence would justify fine-tuning?",
    "strong": "A stable task with representative training data, a baseline failure pattern, and held-out gains that justify training and maintenance costs.",
    "weak": "I fine-tune so the model stops hallucinating.",
    "sources": [
      {
        "title": "Hugging Face · LLM course",
        "url": "https://huggingface.co/learn/llm-course/chapter1/1"
      },
      {
        "title": "Anthropic · Contextual retrieval",
        "url": "https://www.anthropic.com/research/contextual-retrieval"
      },
      {
        "title": "Anthropic · Agent evaluations",
        "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
      }
    ],
    "explain30": "Fine-tuning changes a model’s parameters using training examples; retrieval changes the evidence supplied when the model is used. Use retrieval for current product capabilities and pricing; consider tuning only after a clear recurring behavior problem remains despite better context and prompting.",
    "explain120": "Start with the definition: Fine-tuning changes a model’s parameters using training examples; retrieval changes the evidence supplied when the model is used. Then trace the mechanism: Fine-tuning can adapt behavior, format, or task performance, but it does not replace current source access, tenant permissions, or claim verification. RAG can expose updated or private knowledge without training that knowledge into model weights. The two methods can be combined when evaluations justify it. In this build: Use retrieval for current product capabilities and pricing; consider tuning only after a clear recurring behavior problem remains despite better context and prompting. Explain the decision: Start with a baseline, high-quality context, and evaluations. Use training when you have appropriate examples and a measured reason to change behavior. Close with how you would verify it: Source updates and retrieval are easier to version, inspect, revoke, and cite; training does not inherently preserve provenance or freshness."
  }
];

window.PROTOCOL_LAB = {
  "direct": [
    {
      "title": "1. Define the question and allowed capability",
      "actor": "Host / harness",
      "detail": "The user asks a product question. The host establishes the permitted public evidence scope and selects the retrieval capability. This task record is application data, not an HTTP or MCP request.",
      "request": "{\n  \"question\": \"Does SignalDesk support HubSpot?\",\n  \"principal\": \"public (fixed by trusted application)\",\n  \"allowed_tools\": [\n    \"retrieve_knowledge\"\n  ],\n  \"max_tool_calls\": 6\n}",
      "response": "{\n  \"ready_for\": \"model request with approved tool schema\"\n}",
      "boundary": "The user’s request defines the task; it does not grant arbitrary access. This fixture principal is for teaching, not production identity."
    },
    {
      "title": "2. The model requests a tool",
      "actor": "Model → host",
      "detail": "The host gives the model a provider-specific tool definition. The model returns the requested tool name and arguments; the host has not yet executed an API call. This is a provider-neutral illustration, not a copy-paste model API payload.",
      "request": "{\n  \"tool_definition\": {\n    \"name\": \"retrieve_knowledge\",\n    \"description\": \"Retrieve current public SignalDesk fixture evidence\",\n    \"input_schema\": {\n      \"type\": \"object\",\n      \"properties\": {\n        \"query\": {\n          \"type\": \"string\",\n          \"minLength\": 1,\n          \"maxLength\": 300\n        }\n      },\n      \"required\": [\n        \"query\"\n      ],\n      \"additionalProperties\": false\n    }\n  }\n}",
      "response": "{\n  \"tool_call_id\": \"call-01\",\n  \"name\": \"retrieve_knowledge\",\n  \"arguments\": {\n    \"query\": \"HubSpot\"\n  }\n}",
      "boundary": "The model produces proposed arguments. The harness validates the name, schema, budget, and permission before execution."
    },
    {
      "title": "3. Validate and translate the request",
      "actor": "Trusted direct API adapter",
      "detail": "The adapter rejects extra fields, confirms the allowed operation, and constructs a request for the service. DEMO_API_TOKEN comes from the process environment; the model never needs that value.",
      "request": "{\n  \"name\": \"retrieve_knowledge\",\n  \"arguments\": {\n    \"query\": \"HubSpot\"\n  }\n}",
      "response": "{\n  \"validated\": true,\n  \"method\": \"POST\",\n  \"path\": \"/v1/research\",\n  \"body\": {\n    \"query\": \"HubSpot\"\n  },\n  \"credential_source\": \"DEMO_API_TOKEN environment variable\"\n}",
      "boundary": "Tool schema and API schema may differ. This wrapper maps between them and keeps credentials outside model-visible arguments."
    },
    {
      "title": "4. Call the real HTTP API",
      "actor": "API client → local research service",
      "detail": "This is the actual route implemented in the downloadable lab. The response is an illustrative excerpt: real request IDs, hashes, and complete citation fields differ. The route performs read-only research despite using POST.",
      "request": "POST /v1/research HTTP/1.1\nHost: 127.0.0.1:8771\nAuthorization: Bearer <DEMO_API_TOKEN supplied by adapter>\nContent-Type: application/json\n\n{\n  \"query\": \"HubSpot\"\n}",
      "response": "HTTP/1.0 200 OK\nContent-Type: application/json\nCache-Control: no-store\nX-Request-ID: demo-req-01\n\n{\n  \"request_id\": \"demo-req-01\",\n  \"query\": \"HubSpot\",\n  \"as_of\": \"2026-11-16\",\n  \"status\": \"complete\",\n  \"evidence\": [\n    {\n      \"id\": \"signaldesk-hubspot-2026-11\",\n      \"title\": \"SignalDesk integration catalog: HubSpot\",\n      \"source_url\": \"https://example.com/fictional-signaldesk/integrations/hubspot\",\n      \"text\": \"SignalDesk supports a HubSpot integration for syncing contacts and company records.\",\n      \"verified_at\": \"2026-11-12\"\n    }\n  ],\n  \"findings\": [\n    {\n      \"claim\": \"SignalDesk supports a HubSpot integration for syncing contacts and company records.\",\n      \"source_id\": \"signaldesk-hubspot-2026-11\",\n      \"evidence_status\": \"supported_by_fixture\"\n    }\n  ],\n  \"gaps\": []\n}",
      "boundary": "The server authenticates the token, validates the payload, enforces fixed public scope and freshness, and returns data. Remote deployment would require HTTPS and real tenant identity."
    },
    {
      "title": "5. Normalize evidence and errors",
      "actor": "Host / harness",
      "detail": "The host validates the service response and returns the result to the model, correlated with its tool call. A 401, 429, timeout, or malformed response is not converted into “no evidence.” The exact tool-result envelope depends on the model provider.",
      "request": "{\n  \"status_code\": 200,\n  \"body\": \"validated research response\"\n}",
      "response": "{\n  \"tool_call_id\": \"call-01\",\n  \"result\": {\n    \"findings\": [\n      {\n        \"claim\": \"SignalDesk supports a HubSpot integration for syncing contacts and company records.\",\n        \"source_id\": \"signaldesk-hubspot-2026-11\",\n        \"evidence_status\": \"supported_by_fixture\"\n      }\n    ],\n    \"gaps\": []\n  }\n}",
      "boundary": "The application decides what result content is safe and useful to expose. Sources remain untrusted evidence, not executable instructions."
    },
    {
      "title": "6. Produce and check the answer",
      "actor": "Model → validation → user",
      "detail": "The model writes an answer using the returned evidence. Code validates shape and citation IDs; semantic support, completeness, and usefulness still require evaluation. The offline lab emits excerpts, while the optional live loop calls a model.",
      "request": "{\n  \"question\": \"Does SignalDesk support HubSpot?\",\n  \"evidence_ids\": [\n    \"signaldesk-hubspot-2026-11\"\n  ]\n}",
      "response": "{\n  \"answer\": \"The fictional product supports HubSpot contact and company-record syncing.\",\n  \"source_ids\": [\n    \"signaldesk-hubspot-2026-11\"\n  ],\n  \"scope_limit\": \"This does not establish support for every HubSpot feature.\"\n}",
      "boundary": "A successful service response proves the integration returned data. It does not prove the final answer is correct or the business outcome improved."
    }
  ],
  "mcp": [
    {
      "title": "1. The host starts a client and selects a server",
      "actor": "Host → MCP client",
      "detail": "The host creates an MCP client. The lab launches mcp_server.py as a local stdio subprocess using official SDK 2.3.0. The adapter wraps the same HTTP research API as the direct client; no LLM is required to test this path.",
      "request": "{\n  \"transport\": \"stdio\",\n  \"command\": \"python3\",\n  \"args\": [\n    \"mcp_server.py\"\n  ],\n  \"environment\": \"minimal local configuration; DEMO_API_TOKEN remains outside model context\"\n}",
      "response": "{\n  \"client\": \"connected to local server process\",\n  \"tested_protocol\": \"2026-07-28\"\n}",
      "boundary": "Local servers run with process permissions. Only launch trusted code and provide the environment and data access the server needs."
    },
    {
      "title": "2. Discover protocol support",
      "actor": "MCP client → MCP server",
      "detail": "Current 2026-07-28 discovery is stateless: server/discover returns supported versions and capabilities. Servers implement this method; a client may use it or handle unsupported-version errors. Required request metadata appears in every modern request.",
      "request": "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": \"discover-1\",\n  \"method\": \"server/discover\",\n  \"params\": {\n    \"_meta\": {\n      \"io.modelcontextprotocol/protocolVersion\": \"2026-07-28\",\n      \"io.modelcontextprotocol/clientInfo\": {\n        \"name\": \"fieldguide-client\",\n        \"version\": \"1.0.0\"\n      },\n      \"io.modelcontextprotocol/clientCapabilities\": {}\n    }\n  }\n}",
      "response": "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": \"discover-1\",\n  \"result\": {\n    \"resultType\": \"complete\",\n    \"supportedVersions\": [\n      \"2026-07-28\"\n    ],\n    \"capabilities\": {\n      \"tools\": {},\n      \"resources\": {},\n      \"prompts\": {}\n    },\n    \"_meta\": {\n      \"io.modelcontextprotocol/serverInfo\": {\n        \"name\": \"SignalDesk Research Lab\",\n        \"version\": \"1.0.0\"\n      }\n    }\n  }\n}",
      "boundary": "Self-reported server information helps display and debugging; it is not an authentication credential. This is a representative wire example, not a captured packet."
    },
    {
      "title": "3. Discover the tool contract",
      "actor": "MCP client → MCP server",
      "detail": "tools/list returns tool metadata. The host can translate the MCP inputSchema into the model provider’s tool schema. Neither listing nor discovery grants authority to call every tool.",
      "request": "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": \"tools-1\",\n  \"method\": \"tools/list\",\n  \"params\": {\n    \"_meta\": {\n      \"io.modelcontextprotocol/protocolVersion\": \"2026-07-28\",\n      \"io.modelcontextprotocol/clientInfo\": {\n        \"name\": \"fieldguide-client\",\n        \"version\": \"1.0.0\"\n      },\n      \"io.modelcontextprotocol/clientCapabilities\": {}\n    }\n  }\n}",
      "response": "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": \"tools-1\",\n  \"result\": {\n    \"resultType\": \"complete\",\n    \"tools\": [\n      {\n        \"name\": \"retrieve_knowledge\",\n        \"description\": \"Retrieve current public SignalDesk fixture evidence and citations via the research API.\",\n        \"inputSchema\": {\n          \"type\": \"object\",\n          \"properties\": {\n            \"query\": {\n              \"type\": \"string\",\n              \"minLength\": 1,\n              \"maxLength\": 300\n            }\n          },\n          \"required\": [\n            \"query\"\n          ]\n        }\n      }\n    ]\n  }\n}",
      "boundary": "This example shows a concise equivalent schema; the SDK-generated schema may add titles or definitions. The service still rejects unauthorized or unsupported controls."
    },
    {
      "title": "4. The host asks the model what to do",
      "actor": "Host ↔ model",
      "detail": "MCP discovery has supplied a capability, but MCP does not choose the research action. The host sends an approved model-facing tool description and the task. A model or ordinary program chooses the call.",
      "request": "{\n  \"model_context\": {\n    \"question\": \"Does SignalDesk support HubSpot?\",\n    \"available_tool\": \"retrieve_knowledge(query)\"\n  }\n}",
      "response": "{\n  \"tool_call_id\": \"model-call-01\",\n  \"name\": \"retrieve_knowledge\",\n  \"arguments\": {\n    \"query\": \"HubSpot\"\n  }\n}",
      "boundary": "This is illustrative application/model data, not JSON-RPC. Model-provider call IDs and MCP JSON-RPC IDs serve different correlation layers."
    },
    {
      "title": "5. Invoke the MCP tool",
      "actor": "MCP client → MCP server",
      "detail": "After validating the proposed action, the client sends tools/call. The JSON-RPC ID correlates this request with its response; it is not an idempotency key for business side effects.",
      "request": "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": \"call-1\",\n  \"method\": \"tools/call\",\n  \"params\": {\n    \"_meta\": {\n      \"io.modelcontextprotocol/protocolVersion\": \"2026-07-28\",\n      \"io.modelcontextprotocol/clientInfo\": {\n        \"name\": \"fieldguide-client\",\n        \"version\": \"1.0.0\"\n      },\n      \"io.modelcontextprotocol/clientCapabilities\": {}\n    },\n    \"name\": \"retrieve_knowledge\",\n    \"arguments\": {\n      \"query\": \"HubSpot\"\n    }\n  }\n}",
      "response": "The server dispatches retrieve_knowledge(query=\"HubSpot\").",
      "boundary": "The model cannot choose a principal, a file path, or a secret. Tool arguments remain untrusted inputs and undergo validation."
    },
    {
      "title": "6. The MCP adapter calls the underlying API",
      "actor": "MCP server → local research API",
      "detail": "The MCP tool is an adapter, not a replacement for the service. It invokes the same api_client.request_research function and /v1/research contract as the direct path.",
      "request": "POST /v1/research HTTP/1.1\nHost: 127.0.0.1:8771\nAuthorization: Bearer <DEMO_API_TOKEN supplied by adapter>\nContent-Type: application/json\n\n{\n  \"query\": \"HubSpot\"\n}",
      "response": "HTTP/1.0 200 OK\nContent-Type: application/json\nCache-Control: no-store\nX-Request-ID: demo-req-01\n\n{\n  \"request_id\": \"demo-req-01\",\n  \"query\": \"HubSpot\",\n  \"as_of\": \"2026-11-16\",\n  \"status\": \"complete\",\n  \"evidence\": [\n    {\n      \"id\": \"signaldesk-hubspot-2026-11\",\n      \"title\": \"SignalDesk integration catalog: HubSpot\",\n      \"source_url\": \"https://example.com/fictional-signaldesk/integrations/hubspot\",\n      \"text\": \"SignalDesk supports a HubSpot integration for syncing contacts and company records.\",\n      \"verified_at\": \"2026-11-12\"\n    }\n  ],\n  \"findings\": [\n    {\n      \"claim\": \"SignalDesk supports a HubSpot integration for syncing contacts and company records.\",\n      \"source_id\": \"signaldesk-hubspot-2026-11\",\n      \"evidence_status\": \"supported_by_fixture\"\n    }\n  ],\n  \"gaps\": []\n}",
      "boundary": "The API key belongs to the trusted adapter environment. A production remote MCP access token and a downstream CRM token are separate credentials with separate audiences."
    },
    {
      "title": "7. Return structured evidence",
      "actor": "MCP server → client → host",
      "detail": "The server wraps the service response in an MCP result. structuredContent is server-produced data; it is unrelated to schema-constrained LLM generation. The output schema lets the client validate shape. Text content can support backward compatibility.",
      "request": "The retrieval service returns the validated ResearchResult object.",
      "response": "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": \"call-1\",\n  \"result\": {\n    \"resultType\": \"complete\",\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"{\\n  \\\"request_id\\\": \\\"demo-req-01\\\",\\n  \\\"query\\\": \\\"HubSpot\\\",\\n  \\\"as_of\\\": \\\"2026-11-16\\\",\\n  \\\"status\\\": \\\"complete\\\",\\n  \\\"evidence\\\": [\\n    {\\n      \\\"id\\\": \\\"signaldesk-hubspot-2026-11\\\",\\n      \\\"title\\\": \\\"SignalDesk integration catalog: HubSpot\\\",\\n      \\\"source_url\\\": \\\"https://example.com/fictional-signaldesk/integrations/hubspot\\\",\\n      \\\"text\\\": \\\"SignalDesk supports a HubSpot integration for syncing contacts and company records.\\\",\\n      \\\"verified_at\\\": \\\"2026-11-12\\\"\\n    }\\n  ],\\n  \\\"findings\\\": [\\n    {\\n      \\\"claim\\\": \\\"SignalDesk supports a HubSpot integration for syncing contacts and company records.\\\",\\n      \\\"source_id\\\": \\\"signaldesk-hubspot-2026-11\\\",\\n      \\\"evidence_status\\\": \\\"supported_by_fixture\\\"\\n    }\\n  ],\\n  \\\"gaps\\\": []\\n}\"\n      }\n    ],\n    \"structuredContent\": {\n      \"request_id\": \"demo-req-01\",\n      \"query\": \"HubSpot\",\n      \"as_of\": \"2026-11-16\",\n      \"status\": \"complete\",\n      \"evidence\": [\n        {\n          \"id\": \"signaldesk-hubspot-2026-11\",\n          \"title\": \"SignalDesk integration catalog: HubSpot\",\n          \"source_url\": \"https://example.com/fictional-signaldesk/integrations/hubspot\",\n          \"text\": \"SignalDesk supports a HubSpot integration for syncing contacts and company records.\",\n          \"verified_at\": \"2026-11-12\"\n        }\n      ],\n      \"findings\": [\n        {\n          \"claim\": \"SignalDesk supports a HubSpot integration for syncing contacts and company records.\",\n          \"source_id\": \"signaldesk-hubspot-2026-11\",\n          \"evidence_status\": \"supported_by_fixture\"\n        }\n      ],\n      \"gaps\": []\n    },\n    \"isError\": false\n  }\n}",
      "boundary": "If the API is unavailable or rejects access, the tool reports an execution error. Do not turn every error into an empty successful evidence set."
    },
    {
      "title": "8. Supply the observation and finish",
      "actor": "Host → model → validated answer",
      "detail": "The host extracts usable evidence, correlates it with the model’s tool call, and continues the agent loop. It enforces remaining budgets and validates the final report. MCP standardizes the capability boundary; the host still owns the workflow.",
      "request": "{\n  \"tool_call_id\": \"model-call-01\",\n  \"result\": {\n    \"findings\": [\n      {\n        \"claim\": \"SignalDesk supports a HubSpot integration for syncing contacts and company records.\",\n        \"source_id\": \"signaldesk-hubspot-2026-11\",\n        \"evidence_status\": \"supported_by_fixture\"\n      }\n    ],\n    \"gaps\": []\n  }\n}",
      "response": "{\n  \"answer\": \"The fictional product supports HubSpot contact and company-record syncing.\",\n  \"source_ids\": [\n    \"signaldesk-hubspot-2026-11\"\n  ],\n  \"review\": \"Check claim support, scope, and usefulness before external action.\"\n}",
      "boundary": "The MCP response and a final business result are different events. Keep traces and outcome records so you can investigate both."
    }
  ]
};

window.MCP_DETAILS = [
  {
    "title": "Resources: read context without invoking a search operation",
    "text": "The lab exposes research://policy as known addressable content. resources/read returns that context; the host chooses whether it belongs in model context. Reading a resource is not equivalent to executing the retrieve_knowledge search tool. The URI is an MCP resource identifier, not an HTTP URL.",
    "code": "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": \"resource-1\",\n  \"method\": \"resources/read\",\n  \"params\": {\n    \"_meta\": {\n      \"io.modelcontextprotocol/protocolVersion\": \"2026-07-28\",\n      \"io.modelcontextprotocol/clientInfo\": {\n        \"name\": \"fieldguide-client\",\n        \"version\": \"1.0.0\"\n      },\n      \"io.modelcontextprotocol/clientCapabilities\": {}\n    },\n    \"uri\": \"research://policy\"\n  }\n}\n\n{\n  \"jsonrpc\": \"2.0\",\n  \"id\": \"resource-1\",\n  \"result\": {\n    \"resultType\": \"complete\",\n    \"contents\": [\n      {\n        \"uri\": \"research://policy\",\n        \"mimeType\": \"text/plain\",\n        \"text\": \"Fictional SignalDesk fixtures; public identity only; as-of 2026-11-16; 45-day verification window. No browsing or external writes. Citation identity alone does not prove claim support.\"\n      }\n    ]\n  }\n}",
    "source": {
      "title": "MCP resources",
      "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/resources"
    }
  },
  {
    "title": "Prompts: retrieve a reusable template",
    "text": "The lab exposes evidence_brief(question). prompts/get returns messages; it does not itself query the knowledge base or call the model. A host can let the user select this template and then decide how to incorporate it into a task.",
    "code": "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": \"prompt-1\",\n  \"method\": \"prompts/get\",\n  \"params\": {\n    \"_meta\": {\n      \"io.modelcontextprotocol/protocolVersion\": \"2026-07-28\",\n      \"io.modelcontextprotocol/clientInfo\": {\n        \"name\": \"fieldguide-client\",\n        \"version\": \"1.0.0\"\n      },\n      \"io.modelcontextprotocol/clientCapabilities\": {}\n    },\n    \"name\": \"evidence_brief\",\n    \"arguments\": {\n      \"question\": \"Does SignalDesk support HubSpot?\"\n    }\n  }\n}\n\n{\n  \"jsonrpc\": \"2.0\",\n  \"id\": \"prompt-1\",\n  \"result\": {\n    \"resultType\": \"complete\",\n    \"messages\": [\n      {\n        \"role\": \"user\",\n        \"content\": {\n          \"type\": \"text\",\n          \"text\": \"Investigate this question: Does SignalDesk support HubSpot?\\nUse retrieve_knowledge to gather evidence. Separate facts, inferences, and gaps. Cite returned source IDs. Do not infer a released capability from a roadmap.\"\n        }\n      }\n    ]\n  }\n}",
    "source": {
      "title": "MCP prompts",
      "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/prompts"
    }
  },
  {
    "title": "Three schemas, three different boundaries",
    "text": "An HTTP API body schema describes /v1/research. MCP inputSchema describes the tool’s arguments. A model provider has its own tool-definition envelope. The host/adapter maps among them. Similar JSON does not mean the protocols are interchangeable; validate each actual boundary.",
    "code": "{\n  \"HTTP_API\": {\n    \"method\": \"POST\",\n    \"path\": \"/v1/research\",\n    \"body\": {\n      \"query\": \"HubSpot\"\n    }\n  },\n  \"MCP_tool\": {\n    \"name\": \"retrieve_knowledge\",\n    \"inputSchema\": {\n      \"type\": \"object\",\n      \"properties\": {\n        \"query\": {\n          \"type\": \"string\"\n        }\n      },\n      \"required\": [\n        \"query\"\n      ]\n    }\n  },\n  \"model_tool_call\": {\n    \"note\": \"Provider-neutral illustration; use your provider’s exact schema\",\n    \"name\": \"retrieve_knowledge\",\n    \"arguments\": {\n      \"query\": \"HubSpot\"\n    }\n  }\n}",
    "source": {
      "title": "MCP tool schemas",
      "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
    }
  },
  {
    "title": "Legacy handshake: recognize older examples",
    "text": "This sequence belongs to protocol 2025-11-25 and earlier initialization-based revisions. It is included to interpret older tutorials. The current runnable lab uses SDK 2.3.0 and negotiated 2026-07-28. Do not prepend this old handshake to the modern trace or omit modern request metadata because an older example does.",
    "code": "{\n  \"jsonrpc\": \"2.0\",\n  \"id\": 1,\n  \"method\": \"initialize\",\n  \"params\": {\n    \"protocolVersion\": \"2025-11-25\",\n    \"capabilities\": {},\n    \"clientInfo\": {\n      \"name\": \"legacy-example\",\n      \"version\": \"1.0.0\"\n    }\n  }\n}\n\n{\n  \"jsonrpc\": \"2.0\",\n  \"id\": 1,\n  \"result\": {\n    \"protocolVersion\": \"2025-11-25\",\n    \"capabilities\": {\n      \"tools\": {}\n    },\n    \"serverInfo\": {\n      \"name\": \"legacy-example-server\",\n      \"version\": \"1.0.0\"\n    }\n  }\n}\n\n{\n  \"jsonrpc\": \"2.0\",\n  \"method\": \"notifications/initialized\"\n}",
    "source": {
      "title": "MCP legacy lifecycle, 2025-11-25",
      "url": "https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle"
    }
  },
  {
    "title": "Credentials: separate the two trust boundaries",
    "text": "The runnable demo uses a local stdio connection and a demo bearer token for the local HTTP API. It does not implement production OAuth. For an authenticated remote MCP service, the client authenticates to that resource; the server must separately handle any downstream service credentials. Do not pass an access token to a different audience simply because both services speak HTTP.",
    "code": "Host / MCP client\n  └─ remote MCP access token → intended MCP resource server\n       └─ separate authorized CRM credential → CRM API\n\nLocal lab:\n  Client --stdio--> mcp_server.py\n       └─ DEMO_API_TOKEN (environment) → localhost /v1/research\n\nKeep tokens out of tool arguments, prompts, URLs, and logs.",
    "source": {
      "title": "MCP authorization and token audiences",
      "url": "https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization"
    }
  },
  {
    "title": "Error semantics: an empty result is not a failed request",
    "text": "The actual API returns 401 for bad authentication, 400 for invalid input, 429 for its demo rate limit, and 200 with an evidence gap for an unsupported question. A tool invocation can report isError when its underlying service fails. A protocol-level error is a different layer. Handle each explicitly rather than giving the model an ambiguous empty string.",
    "code": "HTTP 401 → repair authentication; do not retry blindly\nHTTP 400 → correct invalid input\nHTTP 429 + Retry-After → wait/back off within budget\nHTTP 200 + status=evidence_gap → valid search, insufficient evidence\nTimeout after write → uncertain outcome; reconcile before retry\n\n{\n  \"jsonrpc\": \"2.0\",\n  \"id\": \"call-2\",\n  \"result\": {\n    \"resultType\": \"complete\",\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Research API HTTP 429; retry_after=60\"\n      }\n    ],\n    \"isError\": true\n  }\n}",
    "source": {
      "title": "MCP tool error handling",
      "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/tools#error-handling"
    }
  },
  {
    "title": "Transport: why stdout can break a local server",
    "text": "Stdio carries newline-delimited protocol messages between processes. Ordinary print output can corrupt that stream; use stderr for diagnostics. Streamable HTTP has network and authorization considerations. Both carry the same protocol semantics, and neither makes a model’s decision trustworthy by itself.",
    "code": "# Local MCP server\n# stdout: protocol messages only\n# stderr: diagnostic logging\nmcp.run(transport=\"stdio\")\n\n# Remote design would use Streamable HTTP + appropriate auth\n# Cancellation or disconnect does not guarantee rollback.",
    "source": {
      "title": "MCP transport bindings",
      "url": "https://modelcontextprotocol.io/specification/2026-07-28/basic/transports"
    }
  },
  {
    "title": "Decide: direct API or MCP?",
    "text": "Choose based on requirements. Direct API integration can be simpler when one application owns a small set of stable operations. MCP helps when the same capability should be discoverable and reusable by multiple compatible hosts. Both need the same underlying service correctness, permissions, rate-limit handling, evidence checks, and evaluations. Interoperability has an engineering cost; justify it.",
    "code": "Direct path: host → validated adapter → API → evidence\nMCP path: host → MCP client → MCP server/adapter → API → evidence\n\nAsk:\n1. How many hosts must reuse this capability?\n2. Is an established MCP integration already available?\n3. Who owns authentication and permission checks?\n4. What extra latency and failure boundaries appear?\n5. Which path is easier to operate and test for this task?",
    "source": {
      "title": "MCP architecture and scope",
      "url": "https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture"
    }
  }
];

window.PROTOCOL_VERSION_INFO = {
  "specification": "2026-07-28",
  "sdk": "mcp==2.3.0",
  "verified": "2026-11-16",
  "note": "Current architecture and discovery were verified from official raw HTTP and an independent web read. The downloadable integration exercised 2026-07-28. Wire examples are representative excerpts, not captured packets. Legacy initialize/initialized is labeled 2025-11-25.",
  "sources": [
    {
      "title": "Current MCP discovery",
      "url": "https://modelcontextprotocol.io/specification/2026-07-28/server/discover"
    },
    {
      "title": "MCP transport version compatibility",
      "url": "https://modelcontextprotocol.io/specification/2026-07-28/basic/transports"
    }
  ]
};
