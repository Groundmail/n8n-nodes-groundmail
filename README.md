<p align="center">
  <a href="https://groundmail.dev">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://app.groundmail.dev/images/github/readme-logo-dark.png">
      <img alt="Groundmail" src="https://app.groundmail.dev/images/github/readme-logo-light.png" height="44">
    </picture>
  </a>
</p>

<h1 align="center">Groundmail for n8n</h1>

<p align="center">
  An <a href="https://n8n.io">n8n</a> community node for the Groundmail transactional email API.<br>
  Send welcome emails, alerts and receipts from any workflow, then check their delivery status.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/n8n-nodes-groundmail"><img alt="npm" src="https://img.shields.io/npm/v/n8n-nodes-groundmail?color=a3461f&label=npm"></a>
  <a href="./LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-b48f62"></a>
</p>

<p align="center">
  <a href="https://docs.groundmail.dev/guides/n8n">Docs</a> ·
  <a href="https://app.groundmail.dev/signup">Get a free account</a> ·
  <a href="https://groundmail.dev">groundmail.dev</a>
</p>

---

## Install

In n8n, open **Settings → Community Nodes → Install** and enter:

```
n8n-nodes-groundmail
```

On self-hosted n8n you can also install it from npm:

```bash
npm install n8n-nodes-groundmail
```

The node has no runtime dependencies. It calls the Groundmail API directly.

## Credentials

Create **Groundmail API** credentials in n8n:

| Field | Value |
|-------|-------|
| API Key | Your `gm_` key from the Groundmail dashboard |
| API Base URL | `https://api.groundmail.dev` |

## Operations

| Resource | Operation | API |
|----------|-----------|-----|
| Email | Send | `POST /emails` |
| Email | Get | `GET /emails/{id}` |
| Email | Get Many | `GET /emails` |

## Example: send a welcome email

1. Add a trigger, such as **Webhook** or **Form Trigger**.
2. Add a **Groundmail** node, connect it, and pick your credentials.
3. Set **Resource** to Email and **Operation** to Send:

| Field | Value |
|-------|-------|
| From | `welcome@yourdomain.com` |
| To | `={{ $json.email }}` |
| Subject | `Welcome, {{ $json.name }}!` |
| HTML | `<h1>Welcome, {{ $json.name }}!</h1><p>Thanks for signing up.</p>` |
| Text | `Welcome, {{ $json.name }}! Thanks for signing up.` |

Under **Additional Fields** you can set Reply To and a Tag. `From` must use a domain you have verified in Groundmail.

The node returns the API response:

```json
{
  "id": "msg_01h2x3y4z5a6b7c8d9e0f1g2h3",
  "status": "sent"
}
```

Use **Email → Get** with that `id` to check delivery later, or **Email → Get Many** to list recent sends.

## Why Groundmail

- **Our own mail servers and IP space.** Your password resets and receipts don't share a pool with bulk marketing senders.
- **Transactional email only.** No newsletters or cold outreach on the platform, which keeps the sending reputation clean.
- **Start free.** 3,000 emails a month on the Free plan; Pro is 50,000 emails for $20/month. Dedicated IPs on Scale.
- **Built for code and for agents.** REST API, SMTP, SDKs for Node, Python, Go, PHP and Ruby, a CLI, and an MCP server for Claude, ChatGPT and Cursor.

## All Groundmail libraries

| Use | Package |
|-----|---------|
| Node.js / TypeScript | [`groundmail`](https://www.npmjs.com/package/groundmail) on npm |
| Python (Django), Go, Ruby (Rails Action Mailer) | [Groundmail/groundmail-sdks](https://github.com/Groundmail/groundmail-sdks) |
| PHP | [Groundmail/groundmail-php](https://github.com/Groundmail/groundmail-php) |
| Laravel | [Groundmail/groundmail-laravel](https://github.com/Groundmail/groundmail-laravel) |
| Symfony Mailer | [Groundmail/groundmail-symfony-mailer](https://github.com/Groundmail/groundmail-symfony-mailer) |
| Nodemailer | [Groundmail/groundmail-nodemailer](https://github.com/Groundmail/groundmail-nodemailer) |
| NestJS | [Groundmail/nestjs-groundmail](https://github.com/Groundmail/nestjs-groundmail) |
| Strapi | [Groundmail/strapi-provider-email-groundmail](https://github.com/Groundmail/strapi-provider-email-groundmail) |
| Medusa | [Groundmail/medusa-notification-groundmail](https://github.com/Groundmail/medusa-notification-groundmail) |
| AdonisJS | [Groundmail/adonisjs-groundmail](https://github.com/Groundmail/adonisjs-groundmail) |
| Phoenix (Swoosh) | [Groundmail/swoosh_groundmail](https://github.com/Groundmail/swoosh_groundmail) |
| CLI | [`groundmail-cli`](https://www.npmjs.com/package/groundmail-cli) on npm |
| MCP server (Claude, ChatGPT, Cursor) | [Groundmail/groundmail-mcp](https://github.com/Groundmail/groundmail-mcp) |
| Agent skills and Claude Code plugin | [Groundmail/groundmail-skills](https://github.com/Groundmail/groundmail-skills) |
| Email templates (React Email, MJML, HTML) | [Groundmail/email-templates](https://github.com/Groundmail/email-templates) |

[Website](https://groundmail.dev) · [Docs](https://docs.groundmail.dev) · [Pricing](https://groundmail.dev/pricing) · [Sign up free](https://app.groundmail.dev/signup)
