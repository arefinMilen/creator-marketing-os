# **CREATOR MARKETING OS** 

# **Complete Developer Handover & Product Requirements Document** 

Creator management + social media management + influencer marketplace + social commerce + attribution + AI marketing intelligence 

**Product vision: Build the operating system for creator-led marketing — from creator discovery and social management through campaigns, product seeding, content approval, publishing, attribution, payments and optimisation.** 

Initial strategy: Deploy the platform across the owner's 5–6 brands first, recruit a large creator network, provide creators with free social-management tools, and use the creator network as the primary acquisition and distribution engine. 

Audience: Brands, agencies, creator managers and influencers/creators, initially UK/EU-focused with GDPR-conscious architecture. 

Status: Full project handover — Phases 1–4 

Creator Marketing OS — Developer Handover 

Page 1 

### **1. Executive Summary** 

This product should not be built as a simple Metricool/Buffer clone. The strategic objective is to create a Creator Marketing Operating System that connects brands and creators in one workflow. 

The initial business model is deliberately network-led: the owner's brands will use the system internally, creators working with those brands will receive free access to Creator OS tools, and creators will be encouraged to use the platform for their wider social-media activity. As the network grows, the platform can later be sold to external brands and agencies. 

The core product loop is: Discover → Recruit → Contract → Brief → Create → Approve → Publish → Measure → Sell → Pay → Optimise → Retain. 

### **2. Mission & Vision** 

##### **Mission** 

To make creator-led marketing simpler, measurable and more valuable by giving brands and creators one connected platform to manage relationships, content, campaigns, social publishing, commerce and earnings. 

##### **Vision** 

To become the operating system for the creator economy — where creators manage their social presence and creator business, brands discover and collaborate with the right creators, and every piece of creator content can be connected to measurable business outcomes. 

##### **Strategic ambition** 

- Start with the owner's brands as the internal proving ground. 

- Build a high-quality creator network through free creator tools and campaign access. 

- Turn creator data, performance history and relationships into a defensible intelligence layer. 

- Expand from internal use to a creator marketplace and then to external SaaS for brands and agencies. 

- Make the platform valuable because it helps users generate better outcomes, not simply because it provides more dashboards. 

### **3. Product Positioning** 

Recommended category: Creator Marketing Operating System. 

Recommended positioning: “Find the right creators. Create better content. Manage campaigns. Publish everywhere. Track every pound. Let AI tell you what to do next.” 

|**Traditional social scheduler**|**Proposed Creator Marketing OS**|
|---|---|
|Schedules posts|Schedules creator + brand content|
|Reports engagement|Connects content to revenue and ROI|
|Social accounts|Creator social passport + intelligence|
|Content calendar|Campaign-aware content calendar|
|Influencer list|Creator CRM + marketplace + scoring|
|Manual reporting|AI-generated business recommendations|
|One-off creator collaboration|Long-term creator relationship + ambassador lifecycle|
|Basic links|Attribution links, voucher codes and commerce tracking|



### **4. Strategic Business Model** 

Creator Marketing OS — Developer Handover 

Page 2 

##### **Creator acquisition flywheel** 

- Owner's brands recruit creators into campaigns. 

- Creators create free accounts to access campaigns and creator tools. 

- Creators connect their social accounts and build a Creator Passport. 

- Creators use scheduling, analytics, campaign, earnings and content tools for their wider social activity. 

- Creators invite other creators through referral incentives. 

- More creators increase campaign supply and make the marketplace more attractive to brands. 

- External brands and agencies eventually subscribe to access the creator network and operating system. 

##### **Free Creator strategy** 

The free creator tier should be genuinely useful rather than intentionally crippled. The commercial objective is creator acquisition, retention and network effects first; creator subscription revenue can be introduced later. 

- Creator social scheduling 

- Content calendar 

- Basic analytics 

- Creator profile/Passport 

- Campaigns and submissions 

- Brand communication 

- Earnings dashboard 

- Basic AI assistance 

- Limited number of connected social accounts and scheduled posts 

##### **Potential future monetisation** 

- Brand SaaS subscriptions 

- Agency subscriptions 

- Enterprise contracts 

- Premium creator subscriptions 

- Marketplace/payment transaction fees 

- Optional premium analytics/AI 

- White-label agency plans 

- Potential integration/API plans 

### **5. Users & Roles** 

|**Role**|**Primary needs**|
|---|---|
|Platform Admin|Manage the entire ecosystem, users, billing, moderation, integrations, campaigns and platform health.|
|Brand Admin|Find creators, create campaigns, send products/vouchers, approve content, publish, measure ROI and|
|Agency Admin|Manage multiple client brands, teams, creators, campaigns, reports and white-label portals.|
|Brand Team Member|Work within assigned permissions for creators, content, campaigns, analytics or approvals.|
|Creator/Influencer|Manage social accounts, content, campaigns, products, submissions, earnings and opportunities.|
|Client Viewer|Read-only/limited access to an agency's client portal.|
|Finance User|View/approve payments, invoices, creator payouts and financial reporting.|



### **6. Core Product Architecture** 

The platform should be modular so that social-network APIs, commerce integrations and payment providers can change without forcing a rewrite of the core application. 

• Web application: responsive desktop-first SaaS, with mobile-friendly creator workflows. 

Creator Marketing OS — Developer Handover 

Page 3 

- Backend API: modular services for identity, workspaces, creators, campaigns, content, social integrations, commerce, payments, analytics, AI and notifications. 

- Social Integration Layer: provider-specific adapters for Instagram/Meta, TikTok, YouTube/Google, Facebook, then LinkedIn, X, Threads, Pinterest and others. 

- Event-driven analytics/attribution pipeline for clicks, content publication, engagement, conversions, orders and payouts. 

- Object/media storage for creator assets, campaign files, briefs and content versions. 

- Permissions layer using role-based access control and workspace/client isolation. 

- Audit/event log for approvals, edits, permissions, payments and sensitive actions. 

- Integration layer for Shopify/WooCommerce, Stripe/payment infrastructure, CRM, email/SMS and automation tools. 

### **7. Phase 1 — Foundation & Internal Brand MVP** 

Goal: create a production-capable platform that the owner's brands can actually use with real creators. 

##### **7.1 Authentication & workspace** 

- Email/password and social login options where appropriate 

- Brand/agency workspaces 

- Creator accounts 

- Team invitations 

- Role-based permissions 

- 2FA-ready architecture 

- Onboarding flows 

- Terms/privacy/consent capture 

##### **7.2 Creator CRM** 

- Creator onboarding and approval 

- Profile, bio, niche and location 

- Connected social accounts 

- Followers/subscribers 

- Engagement metrics where available 

- Audience information where permitted 

- Past campaign performance 

- Rates and availability 

- Categories: micro/macro/mega and niche 

- Internal notes/tags 

- Campaign history 

- Payment history 

- Creator reliability metrics 

##### **7.3 Campaign management** 

- Campaign name/description 

- Objective: awareness, engagement, traffic, leads, sales, UGC, launch 

- Target platforms 

- Content types: post, Reel, Story, TikTok, Short, YouTube video etc. 

- Brief and guidelines 

- Hashtags/mentions 

- Deliverables 

- Deadlines 

- Budget 

Creator Marketing OS — Developer Handover 

Page 4 

- Payout rules 

- Creator assignment/invitations 

- Campaign status: Draft, Active, Completed, Archived 

##### **7.4 Content approval** 

- Creator uploads images/video/captions/hashtags 

- Preview before submission 

- Approve / Request Revision / Reject 

- Version history 

- Comments on submissions 

- Approval notifications 

- Campaign-specific content checklist 

##### **7.5 Social publishing** 

- Content calendar 

- Scheduling 

- Approved-content publishing workflow 

- Timezone-aware scheduling 

- Initial integrations prioritised: Instagram/Meta, TikTok, YouTube; Facebook where applicable 

- Architecture prepared for LinkedIn, X, Threads, Pinterest and additional platforms 

##### **7.6 Basic analytics** 

- Reach 

- Impressions 

- Views 

- Likes/comments/shares where available 

- Engagement rate 

- Clicks 

- Platform breakdown 

- Creator comparison 

- Campaign summary 

- CSV/PDF reporting foundation 

##### **7.7 Communication** 

- Campaign-specific chat 

- Admin ↔ creator messaging 

- File sharing 

- Notifications 

- Email notification foundation 

##### **7.8 Payments foundation** 

- Per-post fee 

- Per-campaign fee 

- Performance-based payout 

- Pending/Approved/Paid status 

- Creator earnings ledger 

- Payment history 

- Finance export 

### **8. Phase 2 — Creator Intelligence, AI & Commerce** 

Creator Marketing OS — Developer Handover 

Page 5 

##### **8.1 Creator Social Passport** 

During onboarding, creators should be invited to connect their social accounts. The system should obtain only data that the relevant platform APIs and granted permissions make available. 

- Instagram 

- TikTok 

- YouTube 

- Facebook 

- Later: LinkedIn, X, Threads, Pinterest and others 

- Show connected/healthy/expired permissions 

- Show last sync time 

- Allow disconnect/reconnect 

- Clear data-permission controls 

##### **8.2 Unified Creator Intelligence** 

- Follower/subscriber counts 

- Average views 

- Engagement 

- Growth trajectory 

- Audience demographics where available 

- Audience location 

- Content performance 

- Historical campaign performance 

- Conversion performance 

- Brand/niche fit 

- Creator reliability 

- Content consistency 

##### **8.3 Creator Score** 

Create a configurable Creator Score (e.g. 0–100). It should be an explainable composite score, not a black-box claim. 

- Engagement quality 

- Audience quality 

- Growth 

- Content performance 

- Campaign results 

- Conversion performance 

- Reliability/on-time delivery 

- Brand/category fit 

##### **8.4 AI Creator Discovery & Matching** 

Natural-language search should support queries such as: “Find UK fitness creators with 10k–100k followers, predominantly female audiences and strong engagement under a £500 estimated collaboration cost.” 

- Natural-language creator search 

- Filters and saved searches 

- Match score 

- Reasons for match 

- Creator shortlists 

- Similar-creator recommendations 

- Campaign-specific ranking 

- Export/share shortlist 

Creator Marketing OS — Developer Handover 

Page 6 

##### **8.5 Creator Comparison** 

Compare creators across audience, engagement, average views, geography, historical campaign performance, cost and ROI. Avoid treating follower count as the primary decision metric. 

##### **8.6 AI Campaign Builder** 

- User enters product, audience, budget and objective 

- AI proposes campaign strategy 

- Creator requirements 

- Deliverables 

- Brief 

- KPIs 

- Timeline 

- Tracking setup 

- Suggested budget allocation 

##### **8.7 AI Content Copilot** 

- Hooks 

- Scripts 

- Captions 

- CTAs 

- Hashtags 

- Shot lists 

- Platform-specific adaptations 

- Repurposing from one asset to TikTok/Reels/Shorts/etc. 

- Content ideas based on historical performance 

##### **8.8 AI Brief Generator** 

Generate campaign briefs including objectives, creator requirements, deliverables, key messages, prohibited claims, CTA, hashtags, deadlines, usage rights and payment structure. 

##### **8.9 Product & Voucher Hub** 

This is a core feature for the owner's e-commerce brands, especially GazaArabia. It should support a TikTok-Shop-inspired product seeding and voucher workflow without being tied to TikTok. 

- Brand creates a Creator Product Drop/Campaign 

- Set total campaign budget 

- Set per-creator voucher amount 

- Select eligible creators 

- Choose open catalogue, curated catalogue, category voucher or assigned product 

- Allow one product or multiple products 

- Allow creator to pay the difference if basket exceeds voucher 

- Show voucher balance and remaining amount 

- Creator selects product and submits claim/order 

- Connect product selection to e-commerce order/inventory 

- Track order status: claimed, ordered, dispatched, delivered 

- Automatically link product to campaign deliverables 

##### **8.10 Creator Campaign Kit** 

- Product details 

- Campaign brief 

- Do/Don't guidance 

Creator Marketing OS — Developer Handover 

Page 7 

- Required mentions/hashtags 

- Tracking link 

- Discount code 

- Content deadline 

- Usage rights 

- Submission link 

##### **8.11 Product Seeding Dashboard** 

- Creators selected 

- Products claimed 

- Stock remaining 

- Orders placed 

- Delivered 

- Content due 

- Submitted 

- Approved 

- Published 

- Attributed revenue 

- Product cost 

- Creator fees 

- Campaign ROI 

##### **8.12 Creator Storefront** 

Each creator can have a branded mini-storefront/collection of selected products. Products use creator-specific tracking links and discount codes. 

##### **8.13 Affiliate & commerce engine** 

- Unique creator links 

- UTM parameters 

- Discount codes 

- Affiliate commission rules 

- Click tracking 

- Product views 

- Add-to-cart events where available 

- Orders 

- Revenue 

- Commission 

- Attribution window 

- Creator earnings 

##### **8.14 Creator wallet** 

- Available balance 

- Pending balance 

- Lifetime earnings 

- Affiliate commission 

- Upcoming payments 

- Payment history 

- Withdrawal workflow 

##### **8.15 Contracts & rights** 

- Campaign contract templates 

Creator Marketing OS — Developer Handover 

Page 8 

- Deliverables 

- Fees 

- Commission 

- Usage rights 

- Organic vs paid usage 

- Whitelisting 

- Exclusivity 

- Duration 

- Cancellation 

- E-signature integration-ready 

- Contract stored against creator/campaign 

##### **8.16 Content rights management** 

- Ownership 

- Permitted channels 

- Organic/paid advertising rights 

- Start/end date 

- Expiry reminders 

- Asset-level rights metadata 

### **9. Phase 3 — Marketplace, Intelligence & Growth** 

##### **9.1 Creator Marketplace** 

Brands publish campaigns; creators discover and apply; brands shortlist/select; contract and brief are issued; content is submitted/approved; publishing and payment are tracked. 

- Campaign discovery 

- Creator applications 

- Application questions 

- Shortlisting 

- Invite-only campaigns 

- Creator eligibility rules 

- Creator tiers 

- Campaign status and deadlines 

- Marketplace search 

##### **9.2 Creator tiers** 

- Explorer 

- Verified 

- Preferred 

- Ambassador 

- Elite 

Tier benefits can include early product access, larger vouchers, higher commissions, exclusive campaigns, priority opportunities and premium Creator OS access. 

##### **9.3 Creator referral programme** 

- Unique referral link 

- Reward with Creator Pro time/credits or other approved incentives 

- Track invited creator → activation → retention 

- Anti-fraud controls 

Creator Marketing OS — Developer Handover 

Page 9 

##### **9.4 Brand Safety** 

- Public-content risk screening where legally/technically possible 

- Suspicious engagement/follower-growth signals 

- Potential conflicts 

- Configurable risk flags 

- Human review workflow 

- Explainable score/flags; never present automated screening as absolute truth 

##### **9.5 Social listening** 

- Brand mentions 

- Product mentions 

- Campaign hashtags 

- Creator mentions 

- Competitor mentions 

- Sentiment classification 

- Trend detection 

- Alerts 

##### **9.6 Competitor intelligence** 

- Competitor profile monitoring where platform data permits 

- Creator overlap 

- Content trends 

- Growth/engagement comparison 

- Repeated creator relationships 

- Campaign inspiration 

##### **9.7 Predictive analytics** 

- Expected reach ranges 

- Expected engagement 

- Expected conversions 

- Expected revenue 

- Actual vs predicted 

- Confidence ranges 

- Model performance monitoring 

##### **9.8 Budget optimiser** 

- Recommend reallocating budget toward higher-performing creators 

- Compare current vs recommended allocation 

- Projected outcome 

- Human approval required before material changes 

##### **9.9 What-if simulator** 

- Increase/decrease budget 

- Add/remove creators 

- Change deliverables 

- Change platform mix 

- Estimate resulting reach/conversions/revenue 

- Clearly label outputs as forecasts 

##### **9.10 Experimentation** 

Creator Marketing OS — Developer Handover 

Page 10 

- Creator A vs B 

- Hook A vs B 

- Caption A vs B 

- Thumbnail A vs B 

- CTA A vs B 

- Posting-time tests 

- Experiment results and winner 

##### **9.11 Unified AI inbox** 

- Comments/messages where APIs permit 

- Classify positive/question/purchase intent/complaint/spam/creator opportunity 

- Suggested replies 

- Human approval controls 

- Conversation history 

##### **9.12 Lead generation** 

- Capture social purchase intent where platform permissions permit 

- DM flows 

- Landing pages 

- Lead capture 

- CRM integration 

- Lead source attribution 

### **10. Phase 4 — AI Agent, Agency SaaS & Scale** 

##### **10.1 AI Growth Advisor** 

The dashboard should proactively explain what is happening and what action is recommended. 

- Underperforming campaigns 

- Top creators 

- Budget opportunities 

- Content opportunities 

- Engagement changes 

- Revenue changes 

- Trend opportunities 

- Recommended actions 

##### **10.2 AI Marketing Agent** 

Long-term objective: users can state a business goal and receive a monitored plan. The agent recommends actions and, where safe and explicitly authorised, can execute approved workflows. 

Example: “Generate £50,000 creator-attributed revenue this month.” The system monitors performance, recommends creator/budget/content actions, alerts the team and tracks progress. High-impact actions should require explicit approval. 

##### **10.3 Client Portal** 

- Agency-branded client login 

- Campaign progress 

- Creators 

- Content approvals 

- Analytics 

- Revenue/ROI 

Creator Marketing OS — Developer Handover 

Page 11 

• Reports 

• Permission-limited view 

##### **10.4 White-label agency platform** 

- Custom logo 

- Custom colours 

- Custom domain 

- White-label reports 

- White-label email notifications 

- Multiple brands/clients 

- Agency team permissions 

##### **10.5 Proposal & pitch generator** 

- Generate client proposal 

- Campaign strategy 

- Creator shortlist 

- Deliverables 

- Budget 

- Expected reach 

- Expected ROI 

- Timeline 

- Approval workflow 

- Export/share 

##### **10.6 Integration marketplace** 

- Shopify 

- WooCommerce 

- Klaviyo 

- HubSpot 

- Salesforce 

- Stripe/payment systems 

- Google Analytics 

- Meta Ads 

- TikTok Ads 

- Zapier/automation 

- Public API for enterprise 

##### **10.7 Creator/Brand Academy** 

- Creator education 

- Brand education 

- Campaign best practices 

- Social content lessons 

- Analytics education 

- AI recommendations linked to learning content 

### **11. Social Media Management Requirements** 

The scheduler should remain a core daily-use feature, but it must be campaign-aware. 

- Multi-platform content calendar 

- Drag/drop scheduling 

Creator Marketing OS — Developer Handover 

Page 12 

- Timezone support 

- Approved-content-only publishing for campaign assets 

- Media library 

- Caption variants 

- Platform-specific content versions 

- First-comment support where available 

- Post status 

- Failed-publish alerts 

- Retry/reconnect flow 

- Best-time recommendations 

- Content recycling/repurposing 

Important: platform APIs differ. Do not promise every metric or publishing capability on every network. The integration layer must expose capability flags per provider. 

### **12. Analytics & Attribution Specification** 

##### **Core metrics** 

- Reach 

- Impressions 

- Views 

- Engagement 

- Engagement rate 

- Clicks 

- CTR 

- Conversions 

- Revenue 

- Creator cost 

- Product cost 

- Fees 

- CPA/CAC 

- CPC 

- CPE 

- ROAS 

- ROI 

- Revenue per creator 

- Revenue per post 

##### **Attribution flow** 

Creator → Tracking link/code → Click → Product/landing page → Add to cart → Purchase → Revenue → Commission → ROI. 

Support attribution windows, first/last/selected attribution models, UTM parameters and clear handling of direct/organic/paid overlap. 

##### **Business dashboard** 

The executive dashboard should prioritise money and actions over vanity metrics: revenue, creator spend, ROI, conversions, best creators, underperforming campaigns, opportunities and AI recommendations. 

### **13. Creator Lifecycle** 

Creator Marketing OS — Developer Handover 

Page 13 

|**Stage**|**System action**|
|---|---|
|Discover|Creator is found through marketplace, search, referral or direct invite.|
|Onboard|Creator creates account, verifies profile and connects social accounts.|
|Profile|Creator Passport and intelligence profile are created.|
|Match|AI/filters identify relevant campaigns.|
|Apply/Invite|Creator applies or accepts invitation.|
|Contract|Terms, deliverables, fees and rights are confirmed.|
|Product|Voucher/product selection and order are managed.|
|Brief|Creator receives campaign kit.|
|Create|Creator creates content and submits.|
|Approve|Brand approves or requests revision.|
|Publish|Approved content is scheduled/published.|
|Measure|Views, engagement, clicks and conversions are collected.|
|Earn|Fees/affiliate commissions are calculated.|
|Rank|Creator performance and tier are updated.|
|Retain|High-performing creators receive better opportunities and ambassador offers.|



### **14. Brand Campaign Lifecycle** 

Brief → Budget → Creator matching → Selection → Contract → Product/Voucher → Content → Approval → Publishing → Attribution → Payment → ROI → Optimisation → Renewal. 

### **15. Product UX Principles** 

- Creator-first onboarding: account creation should immediately produce value. 

- One place for campaign communication, briefs, content and payment status. 

- Show next actions clearly; avoid dashboard overload. 

- Explain AI recommendations and show the underlying data. 

- Use progressive disclosure for advanced features. 

- Keep creator-facing UI simple and mobile-friendly. 

- Brands should see business outcomes, not only social metrics. 

- Make permissions and data-sharing transparent. 

- Every campaign should have a single source of truth. 

### **16. Data, Privacy, Security & Compliance** 

The original specification identifies UK/EU GDPR compliance. This should be treated as an architectural requirement, not a marketing checkbox. 

- Explicit consent and clear purpose for connected social data. 

- Data minimisation: collect only what is needed and available. 

- Permission-aware social account connections. 

- Disconnect/revoke access workflow. 

- Data export and deletion workflow. 

- Retention policies. 

- Encryption in transit and at rest. 

- Role-based access control. 

- Workspace/client isolation. 

Creator Marketing OS — Developer Handover 

Page 14 

- Audit logs for sensitive actions. 

- 2FA and enterprise SSO-ready architecture. 

- Secure secrets/API token management. 

- Backup and disaster recovery. 

- Fraud and abuse controls for referrals, vouchers, commissions and marketplace activity. 

- Legal review required for GDPR, creator contracts, advertising disclosures, affiliate rules, payment regulations and platform terms. 

### **17. Social API & Integration Architecture** 

Build provider adapters rather than embedding provider-specific assumptions throughout the application. 

- Instagram/Meta adapter 

- TikTok adapter 

- YouTube/Google adapter 

- Facebook adapter 

- Future LinkedIn adapter 

- Future X adapter 

- Future Threads adapter 

- Future Pinterest adapter 

Each adapter should expose: connection state, available permissions, supported publishing actions, supported analytics, sync status, rate-limit/error state and last successful sync. 

If a platform does not expose a metric or publishing action, the UI should say so rather than inventing or approximating it without disclosure. 

### **18. Notifications & Automation** 

- Campaign invitation 

- Application accepted/rejected 

- Brief issued 

- Product claim 

- Order dispatched/delivered 

- Content due 

- Revision requested 

- Content approved 

- Post published 

- Payment approved/paid 

- Rights expiring 

- Social connection expired 

- Campaign underperforming 

- Creator milestone/tier upgrade 

- AI recommendation 

Channels can include in-app, email, push and optional WhatsApp/SMS integrations subject to consent and provider capabilities. 

### **19. Admin Panel** 

- Users/creators/brands/agencies 

- Workspace management 

- Creator verification 

- Campaign moderation 

- Content moderation 

Creator Marketing OS — Developer Handover 

Page 15 

- Marketplace moderation 

- Payments/payouts 

- Voucher budgets 

- Product catalogue/inventory sync 

- Subscription/billing 

- API integrations 

- System health 

- Audit logs 

- Fraud/risk flags 

- Support tickets 

- Feature flags 

- Analytics for platform growth 

### **20. Subscription & Packaging Strategy** 

|**Plan**|**Indicative purpose**|**Core value**|
|---|---|---|
|Creator Free|Acquisition|Social scheduling, calendar, basic analytics, profile, campaigns, earnings, limited AI|
|Creator Pro|Optional premium|Unlimited/expanded scheduling, advanced analytics, AI, competitor insights, advan|
|Brand Starter|Small brands|Creator CRM, campaigns, approvals, scheduling, basic analytics|
|Brand Growth|Growing brands|AI creator discovery, attribution, commerce, advanced analytics, automation|
|Agency/Pro|Agencies|Multi-brand, client portals, white-label reports, advanced permissions, marketplace|
|Enterprise|Large organisations|SSO, API, advanced security, custom integrations, dedicated support|



Pricing should be validated after internal usage data is collected. The initial objective is creator adoption and brand workflow validation, not maximising early subscription price. 

### **21. KPIs for the Business** 

- Creators onboarded 

- Creators connecting ≥1 social account 

- Weekly active creators 

- Monthly active creators 

- Creator retention 

- Creators participating in campaigns 

- Creator referral rate 

- Brands onboarded 

- Active campaigns 

- Campaign completion rate 

- Content approval time 

- Creator response time 

- GMV/revenue attributed to creators 

- Creator payout volume 

- Average campaign ROI 

- Subscription conversion 

- MRR/ARR 

- Logo churn 

- Net revenue retention 

- AI recommendation adoption 

- Marketplace liquidity: campaigns vs creator applications 

Creator Marketing OS — Developer Handover 

Page 16 

### **22. Development Roadmap** 

|**Phase**|**Primary outcome**|
|---|---|
|Phase 1|Production MVP for the owner's brands + initial creator network|
|Phase 2|Creator Intelligence + AI + product/voucher seeding + affiliate/commerce + contracts|
|Phase 3|Creator Marketplace + social listening + predictive analytics + optimisation + agency foundations|
|Phase 4|AI Marketing Agent + white-label agency SaaS + integrations marketplace + enterprise scale|



### **23. Recommended Build Order Inside Phase 1** 

- Authentication/workspaces/permissions 

- Creator onboarding + profile 

- Social connection framework 

- Creator CRM 

- Campaign engine 

- Briefs 

- Content submission + approval 

- Media library 

- Calendar/scheduling 

- Basic analytics 

- Creator earnings 

- Messaging/notifications 

- Admin panel 

- Audit/security foundation 

### **24. Recommended Build Order Inside Phase 2** 

- Creator Social Passport 

- Creator Score 

- AI Creator Search/Matching 

- AI campaign/brief builder 

- AI content copilot 

- Product catalogue integration 

- Creator voucher engine 

- Product claiming/order workflow 

- Tracking links/codes 

- Affiliate attribution 

- Creator wallet 

- Contracts/rights 

### **25. Recommended Build Order Inside Phase 3** 

- Creator marketplace 

- Applications and matching 

- Creator tiers 

- Referral engine 

- Brand safety 

- Social listening 

- Competitor intelligence 

Creator Marketing OS — Developer Handover 

Page 17 

- Predictive analytics 

- Budget optimiser 

- What-if simulator 

- A/B experimentation 

- Lead generation and AI inbox 

### **26. Recommended Build Order Inside Phase 4** 

- AI Growth Advisor 

- AI Marketing Agent 

- Client portals 

- White-label agency SaaS 

- Proposal generator 

- Integration marketplace 

- Public API 

- Creator/Brand Academy 

- Enterprise security/SSO 

- Advanced billing and usage-based monetisation 

### **27. Example End-to-End GazaArabia Campaign** 

Campaign: Ramadan Modest Fashion Creator Drop. 

- Brand sets £5,000 creator/product budget. 

- Brand selects 100 eligible creators. 

- Each creator receives a £100 voucher allowance. 

- Creator sees a curated product catalogue. 

- Creator selects an abaya and/or hijab within the allowance. 

- Platform creates/links the e-commerce order and tracks stock. 

- Creator receives product and campaign kit. 

- Creator submits Reel/TikTok/Story content. 

- Brand requests revision or approves. 

- Approved content is scheduled/published. 

- Creator's tracking link and discount code are active. 

- Clicks, orders and revenue are attributed. 

- Commission and campaign fee are calculated. 

- Dashboard reports product cost, creator cost, revenue, CPA, ROAS and ROI. 

- Top-performing creators are automatically flagged for ambassador/long-term partnership. 

- Creator's profile and performance history are updated for future campaigns. 

### **28. Non-Functional Requirements** 

- Fast initial page load and responsive interactions. 

- Scalable background jobs for social sync and analytics. 

- Idempotent publishing and webhook/event processing. 

- Retry queues for provider failures. 

- Observability: logs, metrics, traces and alerts. 

- Rate-limit-aware API clients. 

- Secure multi-tenant architecture. 

- Automated backups. 

- Automated testing for critical workflows. 

- CI/CD with staging and production environments. 

Creator Marketing OS — Developer Handover 

Page 18 

- Feature flags for staged releases. 

- Data export and deletion processes. 

- Accessibility-conscious UI. 

- Internationalisation-ready architecture, beginning with English/UK. 

### **29. Developer Acceptance Principles** 

- A feature is not complete until permissions, errors, empty states, loading states, auditability and notifications are considered. 

- Never hard-code platform API assumptions. 

- Every creator campaign must have a clear status and owner. 

- Every financial transaction must be traceable to its source campaign/creator/order. 

- Every content revision must preserve version history. 

- AI outputs must be explainable where practical and clearly labelled as recommendations/forecasts. 

- High-impact automated actions require configurable human approval. 

- Creator data sharing must be consent-driven and configurable. 

- All brand/client data must be isolated by workspace and permissions. 

- Build the architecture so future social networks and commerce providers can be added without rewriting core business logic. 

### **30. Final Product Definition** 

The finished platform should feel less like a collection of social-media tools and more like a creator-business operating system. 

For creators: Manage your social presence → discover campaigns → receive products → create content → get approved → publish → generate sales → get paid → build your reputation. 

For brands: Discover creators → match intelligently → launch campaigns → send products/vouchers → manage content → publish → track sales → pay creators → measure ROI → identify ambassadors. 

For agencies: Manage multiple brands and creator programmes from one operating system → report to clients → automate repetitive work → white-label the experience. 

The strategic moat: over time, the platform builds a proprietary network of creator profiles, social performance, campaign outcomes, content performance, conversion data, commercial relationships and creator reliability. That intelligence should improve matching and recommendations while remaining privacy-conscious and permission-based. 

### **31. Developer Handover — Immediate Next Steps** 

- Convert this PRD into epics, user stories and technical tickets. 

- Produce UX wireframes for Brand Dashboard, Creator Dashboard, Creator Passport, Campaign Builder, Campaign Workspace, Content Approval Studio, Calendar, Product/Voucher Hub, Creator Wallet and Analytics. 

- Define database schema and tenant/permission model. 

- Define API contracts and social-provider adapters. 

- Document platform-specific permissions/capabilities before implementation. 

- Select payment/payout provider and commerce integration approach. 

- Define analytics event taxonomy and attribution model. 

- Define AI architecture, model/provider strategy, data boundaries and human approval controls. 

- Build Phase 1 in staging and onboard the owner's brands/initial creators. 

- Use real internal usage to validate workflows before opening external brand subscriptions. 

- Maintain a feature flag system so Phase 2–4 modules can be developed and released independently. 

### **32. Product North Star** 

Creator Marketing OS — Developer Handover 

Page 19 

The platform should ultimately answer one question better than any ordinary social-media management tool: 

###### **“What should this brand do next with its creators and content to generate better business results?”** 

Everything — creator data, social scheduling, campaign management, vouchers, product seeding, content approvals, attribution, payments, analytics and AI — should contribute to answering that question. 

Creator Marketing OS — Developer Handover 

Page 20 

# **CREATOR MARKETING OS** 

## **MASTER DEVELOPER HANDOVER V2 - DEEP AUDIT ADDITIONS** 

Engineering detail, business rules, compliance, API realities, edge cases and launch requirements 

**This addendum is designed to be merged with the existing 20-page Creator Marketing OS Developer Handover. It does not replace the original vision or Phase 1-4 feature list; it makes those requirements sufficiently explicit for engineering, QA, legal/compliance review and production launch.** 

Deep audit completed: 29 August 2026. Current external-platform statements in this addendum were checked against official/current documentation listed in Section 90. Platform APIs and regulations can change, so the developer team must recheck them before release. 

Creator Marketing OS - Master Developer Handover V2  |  Page 21 

#### **33. Product Scope Boundary & Non-Negotiable Principles** 

The existing document correctly positions the product as a Creator Marketing Operating System rather than a scheduling clone. The following boundaries remove implementation ambiguity. 

- One creator identity can participate across multiple brands and agencies while each workspace only sees data it is authorised to see. 

- Creators receive genuine daily-use value even when they are not participating in a campaign: scheduling, analytics, content planning, portfolio, social connections and earnings history. 

- Every commercial outcome must be traceable: creator -> campaign -> deliverable -> content -> link/code -> order/conversion -> commission -> payout. 

- External platform limitations must be exposed honestly. Unsupported social capabilities must degrade gracefully rather than be simulated through scraping. 

- High-impact AI actions such as publishing, spending budget, issuing high-value vouchers, altering contracts or changing payouts require configurable human approval. 

- Privacy, consent, auditability and multi-tenant isolation are product requirements, not post-launch add-ons. 

#### **34. Master Data Model** 

The earlier PRD tells developers to define the schema; this V2 specifies the domain objects that should exist. IDs should be stable and opaque. Every mutable first-class object should have created_at, updated_at, status, tenant/workspace ownership and an audit trail where appropriate. 

|**Entity**|**Purpose / relationships**|
|---|---|
|User|Authentication identity, roles, MFA, consent, language,<br>notificationpreferences.|
|Workspace|Tenant boundary, plan, billing, feature flags, brand/agency<br>settings.|
|Brand|Products, campaigns, social accounts, team, billing and<br>commerce integrations.|
|Agency|Client workspaces, team access, white-label configuration<br>and clientportals.|
|Creator|Profile, niches, rates, availability, social accounts, campaign<br>history, score and reputation.|
|CreatorManager|Optional delegated manager/assistant relationship with<br>scoped creatorpermission.|
|SocialAccount|Provider IDs, handle, OAuth scopes, tokens, expiry,<br>capabilities, sync status and consent.|
|AudienceSnapshot|Time-series follower/subscriber and demographic data with<br>provider/source timestamp.|
|MetricSnapshot|Normalised metric, raw provider metric, time window, source<br>and calculation version.|
|Campaign|Objective, brand, budget, creators, products, deliverables,<br>workflow state and attribution settings.|
|Deliverable|Creator + platform + content requirement + deadline +<br>approval/publish state.|
|Brief|Versioned campaign instructions, acknowledgement and<br>change history.|
|ContentAsset|Media file, version, creator, campaign, product, platform,<br>rights and approval status.|
|Contract|Campaign/creator terms, fees, rights, signatures and version.|
|Product|Commerce source, SKU/variant, inventory, price, category<br>and campaign eligibility.|
|Voucher|Creator/campaign budget token, value, rules, expiry and<br>redemption history.|
|ProductClaim|Creator product selection, voucher, fulfilment, delivery and<br>content obligation.|
|Order|Commerce order, line items, refunds, creator attribution,|



Creator Marketing OS - Master Developer Handover V2  |  Page 22 

||campaign and revenue.|
|---|---|
|TrackingLink|Creator/campaign/product destination, UTM, short code and<br>attribution window.|
|DiscountCode|Creator/campaign/product code, rules, redemptions and<br>commission link.|
|AttributionTouch|Click/code/content/order relationship used by attribution<br>models.|
|Commission|Creator earning derived from an eligible conversion or<br>campaign rule.|
|LedgerEntry|Immutable financial entry for fees, commission, refunds,<br>bonuses, adjustments andpayouts.|
|Payout|Payment-provider transaction, amount, status,<br>failure/reversal details.|
|Subscription|Plan, entitlement snapshot, seats, usage, trial, billing and<br>invoice state.|
|Referral|Referrer, referred user,qualification milestones and reward.|
|Automation|Trigger, conditions, actions, retries, execution logs and<br>owner.|
|Notification|Recipient, channel, template, delivery status and related<br>object.|
|AIRecommendation|Input snapshot, model/version, result, rationale, approval and<br>outcome.|
|ModerationCase|Report, content/user, reason, evidence, decision, appeal and<br>audit trail.|
|AuditEvent|Actor, action, entity, before/after metadata, timestamp and<br>securitycontext.|



#### **35. Data Ownership, Tenancy & Cross-Brand Rules** 

- Creator identity is platform-level; brand relationships are workspace-level. 

- Private brand notes are never visible to other brands or the creator unless explicitly designated as shareable. 

- Campaign performance owned by Brand A cannot automatically be exposed to Brand B. The platform may use aggregated/permissioned statistics for matching only under the applicable privacy policy and lawful basis. 

- Creators can choose marketplace discoverability and the categories of social statistics brands may see. 

- Multi-brand creators need a conflict/exclusivity engine: an active exclusivity term can block or warn on incompatible campaign offers. 

- Workspace deletion must not destroy creator-owned history that the creator is entitled to retain; it should sever the relationship and apply retention/legal rules. 

- Agency/client separation must prevent one client from accessing another client’s creators, assets, strategy, contracts, revenue or analytics. 

#### **36. Permission Matrix & Approval Authority** 

The current role list is not enough for production. Use permission entitlements rather than hard-coded role checks. Example permissions: 

- creator.view, creator.edit_private_notes, creator.invite, creator.export 

- campaign.create, campaign.edit, campaign.approve_budget, campaign.cancel 

- content.submit, content.review, content.approve, content.publish 

- voucher.create, voucher.approve, voucher.revoke 

- finance.view, finance.approve_commission, payout.approve, payout.export 

- contract.create, contract.sign_company, rights.override 

- integration.connect, integration.disconnect, token.reauthorise 

- admin.impersonate, admin.moderate, admin.view_audit 

Creator Marketing OS - Master Developer Handover V2  |  Page 23 

##### **36.1 Four-eyes control for high-risk actions** 

- Large voucher batches 

- High-value payouts 

- Campaign cancellation after creator commitment 

- Manual financial adjustments 

- Rights overrides 

- Bulk creator suspension 

- Sensitive data export 

Allow configurable thresholds: e.g., voucher issuance above a brand-defined amount requires a second approver. 

#### **37. Creator Onboarding - Exact User Journey** 

1. Creator sign-up and email verification. 

2. Age/eligibility check and country selection. 

3. Accept creator terms, privacy notice and marketplace rules. 

4. Profile basics: display name, bio, location, languages, niches and creator type. 

5. Connect Instagram/TikTok/YouTube/Facebook individually through OAuth. 

6. For every platform, show exactly which data/actions are requested and why. 

7. Run first sync and display data freshness/status. 

8. Generate Creator Social Passport. 

9. Ask campaign preferences, product categories, rates and availability. 

10. Collect payment/payout onboarding only when needed; avoid blocking free social tools unnecessarily. 

11. Portfolio/import existing content. 

12. Set discoverability and data-sharing controls. 

13. Optional referral code. 

14. Creator dashboard with an onboarding checklist and first useful action: schedule content, complete profile or browse a campaign. 

If one social connection fails, the account remains usable. Connection errors must be provider-specific and actionable. 

#### **38. Brand & Agency Onboarding - Exact User Journey** 

1. Create company/agency account and verify email/domain. 

2. Create workspace and enter legal/business information. 

3. Add brand profile, logo and brand guidelines. 

4. Invite team and assign permissions. 

5. Connect brand social accounts. 

6. Connect e-commerce platform such as Shopify/WooCommerce. 

7. Sync product catalogue and inventory. 

8. Configure billing/payment settings. 

9. Configure campaign defaults, approval rules and creator requirements. 

10. Import existing creators via CSV or invite links. 

11. Create first campaign from template or AI campaign builder. 

12. Configure tracking domain, attribution window and discount-code policy. 

13. Launch controlled campaign. 

#### **39. Social Account Consent, Token & Sync Lifecycle** 

- Store requested scopes and granted scopes separately. 

Creator Marketing OS - Master Developer Handover V2  |  Page 24 

- Store consent timestamp and privacy-policy version. 

- Show connected / degraded / expired / revoked status. 

- Refresh tokens according to provider rules; never assume perpetual access. 

- On revocation, stop future sync immediately and apply retention rules to historical data. 

- Display last successful sync time on analytics screens. 

- Use incremental sync where possible; avoid re-pulling unnecessary history. 

- Provide user-initiated refresh with throttling. 

- Use a provider-capability registry to decide which screens/features are available for each account. 

#### **40. Creator Social Passport - Data Provenance & Freshness** 

- Every statistic displays platform/source and as-of timestamp. 

- Combined follower/subscriber totals must be labelled as combined audience, not unique people. 

- Do not infer audience demographics that the API does not provide unless clearly marked as estimated and legally reviewed. 

- Keep historical snapshots so brands can see growth trends and creators can prove progress. 

- Allow creators to hide selected fields from marketplace search. 

- Create a confidence/freshness flag: Fresh, Delayed, Stale, Unavailable. 

- If a creator changes handle, preserve stable provider ID and history. 

#### **41. Creator Score, Reputation & Fairness Governance** 

Separate commercial performance from operational reliability. This prevents a high-follower creator from appearing reliable merely because they are popular. 

##### **41.1 Creator Score** 

- Audience fit 

- Content performance 

- Historical conversion 

- Campaign ROI 

- Engagement quality 

- Growth trajectory 

- Brand/category fit 

##### **41.2 Creator Reputation** 

- Campaign completion rate 

- On-time delivery 

- Average response time 

- Revision rate 

- Policy/compliance record 

- Payment/identity verification status 

##### **41.3 Governance** 

- Publish score components to authorised users. 

- Version the scoring formula. 

- Keep historical score snapshots. 

- Do not use protected/sensitive characteristics as hidden ranking proxies. 

- Allow manual review/correction of erroneous source data. 

- Do not automatically deny a creator meaningful opportunity solely on an opaque score without review where that could create significant effects. 

Creator Marketing OS - Master Developer Handover V2  |  Page 25 

- Run periodic bias/quality audits on ranking and recommendation outputs. 

#### **42. Creator Availability, Rate Card & Capacity** 

- Availability calendar and blackout dates. 

- Maximum simultaneous campaigns. 

- Preferred platforms/content formats. 

- Minimum fees or “starting from” rate. 

- Product preferences and size/profile information where relevant and consented. 

- Preferred categories and excluded categories. 

- Travel/location availability. 

- Exclusivity restrictions. 

- Expected response time. 

- Auto-warn brands if a campaign deadline conflicts with availability. 

#### **43. Campaign State Machine** 

Do not implement campaign status as a free-text field. Use validated server-side transitions. 

**Draft -> Internal Review -> Scheduled -> Recruiting -> Selection -> Contracting -> Product/Voucher -> Briefed -> Creating -> Submitted -> Revision -> Approved -> Scheduled/Published -> Measuring -> Completed -> Archived** 

- Paused and Cancelled are explicit states with reason codes. 

- Every transition records actor, timestamp, source and optional reason. 

- Completion does not stop late attribution/reconciliation. 

- Bulk campaigns must support per-creator sub-status so one late creator does not block all others. 

- Campaign cloning/template creation must not copy old tracking IDs, payouts or signatures. 

#### **44. Deliverable & Approval State Machine** 

**Not Started -> In Progress -> Submitted -> Under Review -> Revision Requested -> Resubmitted -> Approved -> Scheduled/Published -> Verified -> Archived** 

- Every submission creates an immutable version. 

- Comments should be attached to a version and optionally a timestamp/frame for video. 

- Approval records approver and timestamp. 

- Configurable revision limit. 

- Approved content can be revoked before publication with a reason. 

- Published content can be marked removed if the creator deletes it or the platform reports it unavailable. 

#### **45. Social Publishing Preflight Validator** 

This was missing from the first specification and is essential for reducing failed scheduled posts. 

- Validate media format, codec, file size, duration and dimensions against the target provider’s current requirements. 

- Validate caption/description length and required campaign disclosure. 

- Validate number of media items for carousel/multi-photo formats. 

- Validate cover/thumbnail requirements where supported. 

- Validate account permissions and token freshness before scheduled publish time. 

- Validate platform privacy choices and creator-selected settings. 

- Validate required @mentions, hashtags and campaign tracking identifiers. 

Creator Marketing OS - Master Developer Handover V2  |  Page 26 

- Warn about unsupported product tags, music, filters or features. 

- Run a final preflight shortly before scheduled time because capabilities/permissions can change. 

#### **46. Social API Capability Matrix & Current Reality** 

Build capability-driven adapters. The same button must not be shown for every network just because the UI is shared. 

|**Platform / capability**|**Engineering implication**|
|---|---|
|TikTok profile & videos|Current Display API uses user-authorised scopes for profile<br>and public video data. Current scope catalogue includes<br>user.info.stats for follower/following/like/video counts. [R1]<br>[R2]|
|TikTok direct posting|Content Posting API requires app configuration plus<br>approved/user-authorised video.publish scope; unaudited<br>clients have visibilityrestrictions.[R3]|
|Instagram|Current Instagram Platform is designed around professional<br>accounts (Business/Creator). Publishing/insights require<br>relevant permissions and app configuration; do not promise<br>consumer-account coverage.[R5]|
|YouTube|Analytics API exposes a substantial set of core metrics and<br>dimensions, but developers must respect report<br>combinations,permissions and deprecations.[R4]|
|Facebook/LinkedIn/X/Threads/Pinterest|Treat each as a separate adapter with its own approved<br>capabilitymatrix. Verifybefore implementation and release.|



- No scraping to bypass platform APIs. 

- No “estimated private analytics” unless the estimate is clearly labelled and approved by product/legal. 

- Provider API version and changelog review becomes a release-management task. 

- Create automated integration health dashboards for tokens, rate limits, webhook failures and publish failures. 

#### **47. Digital Asset Management (DAM) & Media Pipeline** 

- Folders, tags and search. 

- Creator/campaign/product/platform metadata. 

- Original + derivative/transcoded files. 

- Automatic thumbnails and previews. 

- Video duration/aspect-ratio metadata. 

- File checksum and duplicate detection. 

- Virus/malware scan on upload. 

- Signed/private download URLs. 

- Asset-level usage rights and expiry. 

- Approval/version history. 

- Storage quotas and lifecycle/archive policy. 

- CDN/transcoding cost monitoring. 

#### **48. Campaign Templates, Brand Rules & Exclusivity Conflicts** 

- Save reusable campaign templates per brand. 

- Save default contract clauses, approval chain, disclosure wording, payment terms and product-voucher settings. 

- Detect overlapping exclusivity windows across campaigns. 

- Warn if a creator recently promoted a named competitor where brand rules require a cooling-off period. 

- Allow brand-specific restricted creator categories or minimum verification status. 

- Do not expose another brand’s confidential reason for a conflict; show only the restriction needed to make a safe decision. 

Creator Marketing OS - Master Developer Handover V2  |  Page 27 

#### **49. Voucher Engine - Complete Business Rules** 

- Original value, remaining balance, currency and expiry. 

- One-time vs multi-use. 

- Eligible SKUs/categories/collections. 

- Excluded products and out-of-stock behaviour. 

- Minimum basket and maximum reimbursable value. 

- Shipping covered or excluded. 

- Tax/VAT treatment. 

- Creator may or may not pay difference above voucher value. 

- Partial redemption permitted or prohibited. 

- Unused balance expires, rolls over or returns to campaign budget. 

- Voucher stacking with other discounts configurable. 

- Per-creator, per-campaign and global usage limits. 

- Revocation and replacement. 

- Refund/cancellation restoration rules. 

- Idempotent redemption to prevent double spend. 

- Full audit history. 

#### **50. Product Seeding & Fulfilment Workflow** 

**Voucher issued -> product selected -> inventory reserved -> order created -> warehouse/fulfilment -> dispatch -> tracking -> delivery -> creator confirms -> content clock starts -> submission** 

- Reserve stock atomically to prevent two creators claiming the last unit. 

- Handle variants/sizes/colours. 

- Handle substitutions and out-of-stock alternatives. 

- Multiple warehouse support should be possible later. 

- Failed delivery, return, replacement and lost parcel states. 

- Delivery triggers should be configurable: content deadline may begin at delivery, not order date. 

- Protect creator address data with least-privilege access and retention rules. 

#### **51. Shopify / E-Commerce Integration Specification** 

The voucher system should not exist separately from commerce. Shopify currently provides Admin APIs/Functions for appmanaged discounts and webhooks for near-real-time store events. [R6][R7] 

- Product/catalogue initial sync and incremental sync. 

- Variant and inventory mapping. 

- Webhook-driven order, refund, fulfilment and inventory updates where available. 

- Creator/campaign IDs stored as order metadata/metafields where appropriate. 

- Discount-code creation and usage-limit rules through supported commerce APIs. 

- Reconciliation job for missed/out-of-order webhooks. 

- Commerce provider abstraction so WooCommerce or a custom Next.js commerce backend can be added later. 

#### **52. Attribution & Event Architecture** 

Raw events must be immutable and derived analytics recalculable. This is critical because attribution logic will evolve. 

- link_clicked 

- landing_viewed 

Creator Marketing OS - Master Developer Handover V2  |  Page 28 

- add_to_cart 

- checkout_started 

- order_created 

- order_paid 

- order_cancelled 

- refund_created 

- discount_redeemed 

- content_published 

- social_metric_synced 

- commission_created 

- commission_reversed 

- payout_paid 

##### **52.1 Event requirements** 

- Globally unique event ID. 

- Provider/source event ID where applicable. 

- Occurred_at and received_at timestamps. 

- Creator, campaign, product, content and workspace references where applicable. 

- Idempotency key. 

- Raw payload stored separately from normalised fields subject to retention policy. 

- Processing status and reconciliation state. 

#### **53. Attribution Rules & Commission Calculation** 

- Configurable attribution window. 

- First-touch, last-touch and campaign-selected model. 

- Separate click attribution from discount-code attribution. 

- Explicit precedence when both link and code refer to different creators. 

- Assisted attribution for multiple creator touches. 

- Refund/cancellation reverses eligible revenue/commission according to policy. 

- Commission calculation is versioned; changing future rules must not silently rewrite paid historical commissions. 

- Every payout amount must be explainable down to source orders and campaign rules. 

#### **54. Creator Wallet, Ledger, Payout, KYC & Tax** 

Use an immutable ledger rather than a single mutable “balance” field. Balance is calculated from ledger entries. 

- Entry types: campaign fee, affiliate commission, bonus, reimbursement, refund reversal, manual adjustment, payout. 

- States: pending, approved, available, locked, paid, failed, reversed. 

- Payout schedules and minimum payout threshold. 

- Multi-currency support and exchange-rate provenance. 

- Reconciliation with payment-provider webhooks. 

- Creator statements/invoices/receipts. 

- Tax/VAT profile fields and legal-entity details as required. 

- KYC/identity verification delegated to an appropriate provider where possible. 

- Failed payout, bank-detail change, refund and negative-balance handling. 

Stripe Connect is an example of current marketplace/platform infrastructure for connected-account onboarding, routing payments, platform fees, balances and payouts. Charge type also affects who bears disputes/negative balances, so the final payment model must be decided before coding the ledger/payout flow. [R8][R9] 

Creator Marketing OS - Master Developer Handover V2  |  Page 29 

#### **55. Subscription, Billing & Entitlement Engine** 

- Plan catalogue separate from feature entitlements. 

- Free trial and promotional access. 

- Upgrade/downgrade/proration. 

- Grace period after failed payment. 

- Cancellation/reactivation. 

- Seat limits. 

- Connected social account limits. 

- Scheduled-post limits. 

- AI usage limits. 

- Storage limits. 

- Creator/brand/campaign limits. 

- Feature flags by plan and workspace. 

- Referral credits and voucher/promotional credits. 

- Usage dashboard and invoices. 

#### **56. Contracts, Content Rights, Music & Licensing** 

- Contract clauses should be structured data plus a generated/signed document. 

- Store organic usage, paid advertising usage, whitelisting/partnership-ad rights, territory and duration separately. 

- Asset-level rights calendar and expiry alerts. 

- Revision limits and delivery obligations. 

- Cancellation/breach rules. 

- Content ownership vs licence must be explicit. 

- Music/audio rights: the platform should warn brands/creators not to assume that audio available for organic social use is licensed for paid advertising or brand reuse. 

- Store creator declaration that uploaded media is owned/licensed or otherwise permitted. 

- AI-generated/edited content provenance flag and source metadata should be supported. 

#### **57. Advertising Disclosure & Influencer Compliance** 

For UK activity, ASA/CAP guidance states that influencer advertising should be obviously identifiable; current guidance says a prominent “Ad” label upfront is generally expected. [R10] 

- Campaign-level disclosure requirement field. 

- Platform-specific disclosure checklist. 

- Optional auto-prefix “Ad”/approved wording in captions while still allowing creator review. 

- Pre-publish warning if required disclosure is missing. 

- Affiliate campaigns trigger disclosure guidance. 

- Store screenshot/URL/evidence of the published disclosure where feasible. 

- Do not treat an @mention alone as sufficient disclosure in UK campaigns. 

- Allow country-specific compliance rule packs later. 

#### **58. Creator Verification & Identity Tiers** 

|**Tier**|**Meaning**|
|---|---|
|Account Verified|Email/phone/account ownershipchecks complete.|
|Social Verified|At least one social account connected through official OAuth.|
|IdentityVerified|Identityverification completed through approved|



Creator Marketing OS - Master Developer Handover V2  |  Page 30 

||provider/process.|
|---|---|
|Payment Verified|Payout onboarding/KYC capable of receivingfunds.|
|Brand Approved|Internal brand/agencyapproval for campaignparticipation.|
|High Trust / Ambassador|Performance/reliability threshold met; not a substitute for<br>identityverification.|



Do not conflate follower verification badges with identity/payment verification inside this platform. 

#### **59. Under-18 Creators, Age Assurance & Safeguarding** 

This is a major missing area. The platform may attract young creators. ICO guidance says the UK Children’s code can apply to online services likely to be accessed by under-18s, even when they are not the target audience. [R11] 

- Decide product policy: 18+ only, or support minors with an age-appropriate mode. 

- If 18+ only, implement proportionate age assurance and document why the service is not likely to be accessed by children. 

- If minors are allowed, implement guardian/parental flows where legally required, high-privacy defaults and restricted data sharing. 

- Restrict adult-only/high-risk campaign categories for minors. 

- Consider stricter messaging/contact controls for minors. 

- Do not use precise location unnecessarily. 

- Run a children’s privacy/safety assessment before launch if minors are likely users. 

- Legal review is required; do not let the developer team invent age thresholds or guardian rules. 

#### **60. Online Safety, Moderation, Reporting, Blocking & Complaints** 

Because the roadmap includes in-app messaging, user-generated content and a marketplace, obtain a formal UK Online Safety Act scope assessment. Ofcom states that in-scope user-to-user services have illegal-content duties, reporting/complaints obligations, and additional child duties when children are likely to access the service. [R12][R13] 

- Report user/content/message/campaign. 

- Block or mute another user where appropriate. 

- Moderation queue and case management. 

- Illegal-content escalation pathway. 

- Appeal/complaints workflow. 

- Evidence preservation and audit trail. 

- Rate limiting/anti-spam for messaging. 

- Prohibited-product/category controls. 

- Admin emergency suspension. 

- Published terms describing enforcement process. 

#### **61. EU Digital Services Act Applicability Assessment** 

If the service is offered in the EU and functions as an online platform/marketplace, the DSA may create platform and marketplace obligations. Current Commission material highlights notice-and-action, complaint/appeal mechanisms, protection of minors, ad transparency and marketplace trader traceability. [R14][R15] 

- Legal applicability assessment before EU marketplace launch. 

- Notice-and-action reporting pathway if in scope. 

- Moderation decision explanation and internal complaint handling. 

- Trader/business verification where creators or sellers qualify as traders. 

- Clear seller/brand identity for commercial offers. 

- Dark-pattern review of subscription/voucher/consent flows. 

- Recommender-system transparency if required by scale/scope. 

Creator Marketing OS - Master Developer Handover V2  |  Page 31 

#### **62. GDPR, DPIA, Tracking Consent & Data Governance** 

The platform will score creators, combine social datasets, attribute purchases and potentially profile users. ICO guidance identifies evaluation/scoring, automated decisions, large-scale matching and innovative technology as factors that can indicate high-risk processing; a DPIA should be screened and, where required, completed before processing. [R16] 

- Data map: what is collected, source, purpose, lawful basis, retention, recipients and region. 

- Data minimisation: only request social fields/scopes needed for the feature. [R17] 

- DPIA screening for creator scoring, matching, social profiling and attribution. 

- Cookie/storage-access consent management for non-essential web tracking. 

- Server-side tracking should still have a documented lawful basis and user transparency. 

- Access/export, rectification and deletion workflows. 

- Subprocessor register and contracts. 

- International data-transfer assessment where required. 

- Consent withdrawal and social-account disconnect behaviour. 

- Do not copy raw audience data into unrelated analytics systems by default. 

#### **63. AI Architecture, Model Governance & EU AI Act Review** 

- Use a model gateway so AI providers/models can change. 

- Version prompts/system instructions and model identifiers. 

- Log tool/action calls and human approvals. 

- Minimise personal data sent to models. 

- Contractually control whether customer data can be used for third-party model training. 

- Create AI usage/cost limits per workspace. 

- Validate structured AI output before saving or executing. 

- Provide fallback behaviour if AI is unavailable. 

- Allow workspace owners to disable AI features. 

- Carry out an EU AI Act applicability assessment for EU deployment. Current Article 50 transparency obligations began applying 2 August 2026 for certain AI systems/content. [R18] 

- Support labelling/provenance where AI-generated or AI-manipulated content requires transparency. 

#### **64. AI Agent Permission Levels** 

|**Level**|**Example**|**Control**|
|---|---|---|
|Observe|Analyse analytics and detect<br>opportunities.|No action outside analysis.|
|Recommend|Suggest creator, budget or content<br>changes.|Human decides.|
|Prepare|Draft campaign, brief, report, reply or<br>schedule.|Human approves final.|
|Execute low-risk|Create internal task or send pre-<br>approved reminder.|Workspace-configurable.|
|Execute high-impact|Publish, spend, issue large voucher,<br>sign/alter terms, changepayout.|Explicit approval required.|



#### **65. Fraud, Abuse & Risk Engine** 

- Duplicate creator accounts. 

- Suspicious follower-growth and engagement anomalies. 

- Fake clicks/conversions. 

Creator Marketing OS - Master Developer Handover V2  |  Page 32 

- Self-referral and referral farms. 

- Voucher double-spend and repeated product-claim abuse. 

- Duplicate payment identities. 

- Coupon leakage/abuse. 

- Refund/chargeback abuse. 

- Account takeover indicators. 

- Content impersonation or stolen portfolio assets. 

- Risk queue with human review. 

- Risk score should never be treated as proof; show evidence/signals. 

#### **66. Marketplace Disputes, Cancellations & Redress** 

- Creator no-show / missed deadline. 

- Brand cancels before/after product shipment. 

- Content rejected after multiple revisions. 

- Dispute over deliverable scope. 

- Dispute over usage rights. 

- Payment dispute. 

- Product damaged/lost/returned. 

- Affiliate commission disagreement. 

- Formal support case with evidence and timeline. 

- Escalation and appeal. 

- Rules for freezing payout while a legitimate dispute is investigated. 

- No unilateral deletion of evidence after case creation. 

#### **67. Agency Client Portal & White-Label Infrastructure** 

- Custom logo, colours and report branding. 

- Custom domain with DNS verification and managed TLS/SSL. 

- Agency sender-domain configuration for emails, with SPF/DKIM/DMARC guidance. 

- Per-client permissions. 

- Client approval workflows. 

- Client report scheduling. 

- Agency-level consolidated analytics plus client isolation. 

- White-label settings must not change the legal entity/payment disclosures required by law. 

#### **68. Automation Engine** 

###### **Trigger -> Conditions -> Actions -> Delay/Schedule -> Execution -> Retry -> Audit** 

- Triggers: campaign event, product delivered, content approved, deadline, analytics threshold, order, payout, rights expiry. 

- Conditions: brand, creator tier, campaign type, amount threshold, platform, country, performance. 

- Actions: notification, task, voucher, status change, report, creator invite, approval request. 

- Dry-run/test mode. 

- Loop detection. 

- Rate limits and budget limits. 

- Execution history and failure reason. 

- Pause/disable per automation. 

Creator Marketing OS - Master Developer Handover V2  |  Page 33 

#### **69. Messaging & Notification Deliverability** 

- In-app notifications. 

- Email transactional notifications. 

- Optional push/mobile notifications later. 

- Optional WhatsApp/SMS only with consent and provider compliance. 

- Notification preference centre. 

- Quiet hours/time zone. 

- Transactional vs marketing separation. 

- Email bounce/complaint handling. 

- Template versioning and localisation. 

- Delivery logs and retry/dead-letter queue. 

#### **70. Global Search & Indexing** 

- Creators, campaigns, brands, products/SKUs, content assets, orders, vouchers, contracts, payments, tracking links and messages. 

- Permission filtering before results are returned. 

- Filter/facet support. 

- Saved searches for creator discovery. 

- Search indexing should be asynchronous and recoverable. 

- Do not put secrets or unnecessary personal data into a third-party search index. 

#### **71. Reporting, Benchmarking & Metric Dictionary** 

- Define every metric in a central data dictionary. 

- Example: engagement rate formula must specify numerator, denominator, platform, time window and content types. 

- Do not compare platform metrics as if they are identical when definitions differ. 

- Allow benchmark cohorts by niche, creator size, platform, geography and campaign type once sample size is sufficient. 

- Never reveal another brand’s confidential data in benchmark outputs. 

- Reports: campaign, creator, executive, finance, product seeding, affiliate, agency client, social performance. 

- CSV/PDF export and scheduled reports. 

- Enterprise raw-data export/API later. 

#### **72. Data Warehouse & Analytics Architecture** 

- Operational database is not the long-term analytics warehouse. 

- Create an event pipeline into an analytics store/warehouse. 

- Keep provider raw metrics separate from normalised metrics. 

- Version transformation logic. 

- Late-arriving data and backfills must be supported. 

- Financial reporting should reconcile against the ledger, not a marketing dashboard table. 

- Use aggregated datasets for AI recommendations when raw personal data is unnecessary. 

#### **73. Creator Network Graph - Long-Term Moat** 

###### **Creator <-> Social Account <-> Audience <-> Content <-> Product <-> Campaign <-> Brand <-> Click <-> Order <-> Revenue <-> Commission <-> Reputation** 

- Use stable IDs and relationships so recommendations can improve without redesigning the database. 

Creator Marketing OS - Master Developer Handover V2  |  Page 34 

- Graph features can power similar-creator discovery, product matching, ambassador identification and cross-brand opportunity matching. 

- Network intelligence must respect workspace confidentiality and creator consent. 

- Create a policy for whether aggregated historical performance can influence recommendations for another brand. 

#### **74. Migration, Import & Switching Tools - Important for Subscription Sales** 

A great product is harder to sell if switching is painful. Add migration tools early enough to reduce acquisition friction. 

- CSV creator import/export. 

- Bulk creator invitations. 

- Import campaign contacts, tags and historical notes. 

- Bulk media upload. 

- Calendar CSV/import where feasible. 

- Guided migration checklist for users coming from spreadsheets, Buffer, Metricool or similar tools. 

- Demo workspace/sample data for new brands. 

- Onboarding health score so sales/customer success can see where users are stuck. 

#### **75. Mobile / PWA Strategy** 

- Phase 1: responsive web across all roles. 

- Creator screens should be mobile-first because content, messages, product claims and approvals are phone-centric. 

- PWA can provide home-screen install and some notification/offline benefits before native apps. 

- Native iOS/Android decision should be driven by creator usage and API needs, not marketing preference. 

- Backend APIs and business rules must be shared so mobile does not become a separate product implementation. 

#### **76. Accessibility, Internationalisation & Regionalisation** 

- Target WCAG 2.2 AA for core web flows where practical. 

- Keyboard navigation and visible focus states. 

- Accessible form labels and error messages. 

- Alt text support for creator/brand assets. 

- Localisation-ready strings; avoid hard-coded English in business logic. 

- Time zones stored explicitly; timestamps stored in UTC and rendered locally. 

- Currencies stored as integer minor units plus ISO currency code. 

- Country-specific address, tax and phone formats. 

- Right-to-left UI readiness if future markets require it. 

#### **77. Public API, Webhooks & Developer Platform** 

- Versioned REST/GraphQL API strategy. 

- OAuth for third-party apps and scoped API keys for server integrations. 

- Webhook subscriptions. 

- Webhook signing and replay protection. 

- Idempotency keys for write operations. 

- Rate limits and quotas. 

- Sandbox/test environment. 

- API documentation and changelog. 

- Deprecation policy. 

- Developer audit logs. 

Creator Marketing OS - Master Developer Handover V2  |  Page 35 

• Integration marketplace approval/security review. 

#### **78. Admin, Support & Operational Tooling** 

- User/workspace lookup. 

- Creator verification queue. 

- Moderation queue. 

- Campaign and voucher investigation. 

- Payout/reconciliation dashboard. 

- Integration health dashboard. 

- Support tickets. 

- Feature flags. 

- Safe admin impersonation with audit trail and clear banner. 

- User data export/delete controls. 

- System status page and incident communication. 

- Customer-success notes separate from creator-brand notes. 

#### **79. Infrastructure & DevOps** 

- Separate development, staging and production environments. 

- Infrastructure as code. 

- CI/CD with automated tests. 

- Database migrations with rollback strategy. 

- Secrets management. 

- Background job queues. 

- Webhook ingestion service. 

- Scheduled reconciliation jobs. 

- Object storage + CDN. 

- Feature flags for phased rollout. 

- Error tracking, logs, metrics and tracing. 

- Provider rate-limit monitoring. 

- Safe deployment strategy for high-risk modules. 

#### **80. Security Requirements** 

- Encryption in transit and at rest. 

- MFA for privileged/admin users. 

- Least-privilege cloud/service accounts. 

- Secure token storage and rotation. 

- No unnecessary social access tokens in browser/local storage. 

- CSRF/XSS/SQL injection protections. 

- Input validation and output encoding. 

- Upload-type validation and malware scan. 

- Rate limiting and abuse throttles. 

- Tenant-isolation automated tests. 

- Immutable/tamper-evident audit strategy for sensitive events. 

- Dependency and container vulnerability scanning. 

- Penetration test before public launch. 

Creator Marketing OS - Master Developer Handover V2  |  Page 36 

#### **81. Backup, Disaster Recovery & Business Continuity** 

- Automated encrypted backups. 

- Point-in-time database recovery where supported. 

- Restore testing, not just backup creation. 

- Define RPO and RTO for critical services. 

- Recovery runbook for social provider outage, database incident, payment outage and object-storage failure. 

- Multi-region architecture is not mandatory initially, but the design should avoid unnecessary barriers to future regional 

- resilience. 

- Financial and attribution data receive stricter recovery/reconciliation treatment than non-critical cached analytics. 

#### **82. Service Levels, Observability & Performance** 

- Define SLOs for login, campaign pages, scheduler, publish jobs, webhook processing and payment workflows. 

- Monitor publish success rate per provider. 

- Monitor social sync freshness. 

- Monitor webhook backlog and dead-letter queue. 

- Monitor payout/reconciliation mismatches. 

- Monitor AI latency/cost/error rate. 

- Alert on unusual voucher redemption spikes. 

- Performance budgets for dashboard load and large creator lists. 

- Use pagination/cursoring; never load tens of thousands of creators into one request. 

#### **83. QA, Testing & Critical Edge Cases** 

##### **83.1 Required test types** 

- Unit tests 

- Integration/provider tests 

- End-to-end tests 

- Permission/tenant-isolation tests 

- Load tests 

- Accessibility tests 

- Security tests 

- Financial reconciliation tests 

- Disaster-recovery test 

##### **83.2 Edge cases to explicitly test** 

- Creator disconnects social account during active campaign. 

- Token expires five minutes before scheduled post. 

- Provider rejects a post after preflight. 

- Creator deletes published content. 

- Creator changes social handle. 

- Campaign cancelled after product shipment. 

- Product goes out of stock between selection and checkout. 

- Two creators claim last unit simultaneously. 

- Voucher expires during checkout. 

- Refund happens after commission is already available. 

- Payout fails after approval. 

Creator Marketing OS - Master Developer Handover V2  |  Page 37 

- Creator has competing exclusivity contracts. 

- AI uses stale social data. 

- Provider metric is deprecated or renamed. 

- Webhook arrives twice or out of order. 

- Brand user loses permission while a review page is open. 

- Creator is suspended while they have unpaid earnings. 

#### **84. Cost Controls & Unit Economics** 

The software can become expensive before it becomes profitable because social sync, video storage/transcoding, AI and messaging scale with activity. 

- AI cost per workspace/creator/campaign. 

- Video storage and CDN egress cost. 

- Transcoding cost. 

- Social API polling/sync cost. 

- Email/SMS/WhatsApp cost. 

- Payment/payout fees. 

- Fraud/chargeback loss. 

- Free Creator tier usage limits designed around acquisition economics rather than arbitrary restrictions. 

- Internal cost dashboard: cost per active creator, per brand and per £ of creator-attributed GMV. 

#### **85. Product Analytics & Growth Funnel** 

- Creator invite -> signup -> social connect -> profile complete -> first scheduled post -> first campaign -> first earning -> 30/90-day retained. 

- Brand signup -> workspace complete -> creator import -> campaign created -> first creator accepted -> first content approved -> first attributed conversion -> second campaign. 

- Measure activation, not just account creation. 

- Feature adoption: scheduling, campaigns, voucher hub, analytics, AI, marketplace. 

- Creator referral viral coefficient. 

- Free Creator -> Creator Pro conversion if introduced. 

- Brand trial -> paid conversion. 

- Agency client/workspace expansion. 

- Net revenue retention and logo churn. 

#### **86. Rollout & Launch Gates** 

|**Stage**|**Required gate**|
|---|---|
|Internal Alpha|Owner brands + small trusted creator group; manual support;<br>core campaign/scheduling/approval stable.|
|Creator Beta|OAuth/social sync stable; creator consent/privacy; voucher<br>pilot; analytics and support tooling.|
|Commerce Beta|Inventory/order/refund reconciliation; attribution; commission<br>ledger;payout sandbox.|
|Marketplace Beta|Verification, dispute process, moderation/reporting,<br>contracts, financial rules and safetyreview.|
|External Brand SaaS|Billing/entitlements, onboarding/migration, support SLAs,<br>securityassessment and analytics.|
|Agency/Enterprise|White-label, permissions, client isolation, SSO/API where<br>promised, compliance/securitydocumentation.|
|AI Agent|Actionpermissions, approvalgates, auditability, evaluation|



Creator Marketing OS - Master Developer Handover V2  |  Page 38 

and legal/AI governance review. 

#### **87. Definition of Done** 

- Happy path and documented edge cases work. 

- Server-side permission enforcement. 

- Loading, empty and error states. 

- Audit event created where required. 

- Notifications implemented. 

- Product analytics event implemented. 

- Unit/integration/E2E tests passed. 

- Provider/API failure behaviour documented. 

- Accessibility checked for the flow. 

- Monitoring/alerting defined if operationally critical. 

- Migration/rollback plan exists for schema changes. 

- Security review for sensitive features. 

- Product owner acceptance against written criteria. 

#### **88. Recommended Engineering Epics** 

- EPIC 01 - Identity, Authentication, Tenancy & Permissions 

- EPIC 02 - Creator Profile, Social Passport & Social Connections 

- EPIC 03 - Creator CRM & Relationship Timeline 

- EPIC 04 - Campaign & Deliverable Workflow 

- EPIC 05 - Media/DAM & Content Approval 

- EPIC 06 - Social Scheduler & Publishing Adapters 

- EPIC 07 - Analytics, Event Pipeline & Metric Dictionary 

- EPIC 08 - Product Catalogue, Voucher & Seeding 

- EPIC 09 - Commerce Orders, Attribution & Affiliate Engine 

- EPIC 10 - Financial Ledger, Commissions & Payouts 

- EPIC 11 - Contracts, Rights & Compliance 

- EPIC 12 - Creator Intelligence, Score, Reputation & Matching 

- EPIC 13 - Marketplace, Applications, Tiers & Referrals 

- EPIC 14 - Messaging, Notifications & Automation 

- EPIC 15 - AI Copilot, Growth Advisor & Agent Controls 

- EPIC 16 - Agency, Client Portal & White Label 

- EPIC 17 - Subscription/Billing/Entitlements 

- EPIC 18 - Moderation, Fraud, Safety & Disputes 

- EPIC 19 - Admin, Support & Observability 

- EPIC 20 - Developer API, Webhooks & Integrations 

#### **89. Decisions Product Owner Must Lock Before Development** 

These are not coding questions. The owner/product team should decide them so developers do not create unintended business policy. 

- Is the platform 18+ only at launch, or will minors be supported? 

- Which social networks are launch-critical vs future? 

Creator Marketing OS - Master Developer Handover V2  |  Page 39 

- Which creator social data can external brands see by default? 

- What exactly is free in Creator Free, and what are the hard usage limits? 

- Will creators ever pay subscription, or is creator access primarily an acquisition benefit? 

- Which payment model: brand pays creator directly, platform-managed payouts, or both? 

- Who is merchant of record for marketplace transactions? 

- What is the refund/chargeback/negative-balance policy? 

- What percentage/fee does the platform take from marketplace transactions? 

- Does voucher unused balance roll over? 

- Who pays shipping on product seeding? 

- What is the default affiliate attribution window? 

- What wins when link attribution and discount code point to different creators? 

- Can a brand view performance from a creator’s work with another brand? If yes, what is aggregated/anonymised? 

- What are Creator Score weights and who can change them? 

- Which AI actions can execute without approval? 

- What is the first e-commerce integration: Shopify, custom GazaArabia backend, WooCommerce, or more than one? 

- Which countries/currencies are in launch scope? 

- What campaign categories are prohibited/restricted? 

- What is the dispute-resolution authority inside the platform? 

#### **90. Verified Research & Official Sources - 29 August 2026** 

These references validate technical/compliance assumptions in this V2. They are not a substitute for legal advice or a developer re-check immediately before implementation/release. 

|**Ref**|**Source**|**URL**|
|---|---|---|
|R1|TikTok for Developers - Display API<br>Overview / Get Started|https://developers.tiktok.com/docs/en/<br>display-api-overview and<br>https://developers.tiktok.com/docs/en/di<br>splay-api-get-started|
|R2|TikTok for Developers - Scopes<br>Reference|https://developers.tiktok.com/docs/en/<br>tiktok-api-scopes|
|R3|TikTok for Developers - Content<br>PostingAPI / Direct Post|https://developers.tiktok.com/docs/en/<br>content-posting-api-get-started|
|R4|Google for Developers - YouTube<br>Analytics Metrics & Dimensions|https://developers.google.com/<br>youtube/analytics/metrics and<br>https://developers.google.com/youtube/<br>analytics/dimensions|
|R5|Meta - Instagram Platform / Instagram<br>API with Instagram Login|https://developers.facebook.com/docs/<br>instagram-platform/instagram-api-with-<br>instagram-login|
|R6|Shopify Dev - App-managed code<br>discounts / Shopify Functions|https://shopify.dev/docs/api/admin-<br>graphql/latest/mutations/<br>discountCodeAppCreate|
|R7|Shopify Dev - Webhooks|https://shopify.dev/docs/apps/build/<br>webhooks|
|R8|Stripe Docs - Platforms and<br>marketplaces with Connect|https://docs.stripe.com/connect|
|R9|Stripe Docs - Marketplace<br>refunds/disputes and risk|https://docs.stripe.com/connect/<br>marketplace/tasks/refunds-disputes and<br>https://docs.stripe.com/connect/risk-<br>management|
|R10|ASA/CAP - Recognising ads: social<br>media and influencer marketing|https://www.asa.org.uk/advice-online/<br>recognising-ads-social-media.html|
|R11|ICO - Children’s code / services likelyto|https://ico.org.uk/for-organisations/uk-|



Creator Marketing OS - Master Developer Handover V2  |  Page 40 

||be accessed by children|gdpr-guidance-and-resources/<br>childrens-information/childrens-code-<br>guidance-and-resources/|
|---|---|---|
|R12|Ofcom - Illegal content duties under the<br>Online Safety Act|https://www.ofcom.org.uk/online-safety/<br>illegal-and-harmful-content/illegal-<br>content-duties-under-the-online-safety-<br>act|
|R13|Ofcom - Protection of children duties<br>under the Online Safety Act|https://www.ofcom.org.uk/online-<br>safety/protecting-children/protection-of-<br>children-duties-under-the-online-safety-<br>act|
|R14|European Commission - Digital<br>Services Act|https://digital-strategy.ec.europa.eu/<br>en/policies/digital-services-act|
|R15|European Commission - DSA notice<br>and action / marketplace transparency|https://digital-strategy.ec.europa.eu/<br>en/policies/dsa-notice-and-action-<br>mechanism|
|R16|ICO - Data Protection Impact<br>Assessments|https://ico.org.uk/for-organisations/uk-<br>gdpr-guidance-and-resources/<br>accountability-and-governance/data-<br>protection-impact-assessments-dpias/|
|R17|ICO - Data minimisation|https://ico.org.uk/for-organisations/uk-<br>gdpr-guidance-and-resources/data-<br>protection-principles/a-guide-to-the-<br>data-protection-principles/data-<br>minimisation/|
|R18|European Commission - AI Act Article<br>50 transparency guidance (2026)|https://digital-strategy.ec.europa.eu/en/<br>library/guidelines-transparency-<br>obligations-providers-and-deployers-ai-<br>systems|



#### **91. Final Development Instruction** 

**Do not build this as 100 disconnected features. Build one continuous, auditable business loop: Creator Identity -> Social Intelligence -> Opportunity -> Contract -> Product/Voucher -> Content -> Approval -> Publication -> Attribution -> Revenue -> Commission -> Payout -> Reputation -> Better Next Opportunity.** 

The existing Phase 1-4 roadmap remains valid. Sections 33-91 define the missing architecture, business rules, safety/compliance, platform constraints, operational tooling, edge cases and release gates that must be turned into epics, user stories, API contracts, schema migrations, UI flows and acceptance tests before implementation. 

Creator Marketing OS - Master Developer Handover V2  |  Page 41 

