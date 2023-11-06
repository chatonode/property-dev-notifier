# Property Dev Notifier

Property Dev Notifier is a monorepo containing components for handling a signup/login/logout system for Property Developers and sending email notifications using SendGrid. The repository is organized into the following components:

## Server

The Express Rest API for handling user authentication and notification.

## Client

The Next.js 13 application for the client-side interface.

## Infra

Contains configuration and resources for Docker and Kubernetes.

## `skaffold.yaml`

A configuration file for local deployment using Skaffold.

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

[Docker Desktop](https://www.docker.com/products/docker-desktop) for local development and testing.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/property-dev-notifier.git

   ```

2. Navigate to the project directory:

   ```bash
   cd property-dev-notifier

   ```

3. Build and run the application with Skaffold:

   ```bash
   skaffold dev

   ```

4. Access the application:

> Open your web browser and visit https://localhost:3000 for the application.
> > or you can simply use your `hosts` file in Windows to redirect `127.0.0.1` to `your-domain.com` and visit https://your-domain.com


Note that, once you see the warning message of **Your connection is not private**, you need to type `thisisunsafe` anywhere on the screen. This is related to our https or load balancer, probably.

### Configuration

Configure **SendGrid API key** and **SendGrid Account E-mail** (which is verified and responsible for sending the e-mails) in the server component to enable email sending functionality. This key should be stored as an environment variable.

### Usage

1. Sign up as a Property Developer.
2. Log in to your account.
3. Use the application as needed.
4. Log out when finished.

### Project Structure

The project is structured as follows:

```graphql
property-dev-notifier/
│
├── client/            # Next.js client application
│
├── server/            # Express Rest API server
│
├── infra/             # Docker and Kubernetes resources
│
└── skaffold.yaml      # Skaffold configuration for local development
```

## Environment Variables

Make sure to set the following environment variables in the .env file or through your deployment platform as Kubernetes Secret:

- **SENDGRID_API_KEY**: Your SendGrid API key for sending emails.
- **SENDGRID_ACCOUNT_EMAIL**: Your SendGrid account e-mail which is the subject of the sent emails.
- **JWT_KEY**: For secure authentication
- **MONGO_URI**: For MongoDB URI runs on Kubernetes deployment

# TODO: License
This project is licensed under the **TODO License** - see the **LICENSE file** for details.

# Acknowledgments
Thanks to the open-source community for providing the tools and technologies used in this project.
Feel free to customize this README.md to include any specific instructions, details, or acknowledgments relevant to your project.

## Conclusion

Bye...

⛸️⛸️
