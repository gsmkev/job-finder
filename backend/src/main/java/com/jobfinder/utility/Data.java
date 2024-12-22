package com.jobfinder.utility;

public class Data {

    public static String getMessageBody(final String otp, final String name) {
        final String CSS_STYLES = """
            :root {
                --primary-color: #2196F3;
                --text-color: #333;
                --background-color: #ffffff;
            }
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
                color: var(--text-color);
            }
            .container {
                padding: 2rem;
                max-width: 600px;
                margin: 2rem auto;
                background: var(--background-color);
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .logo {
                text-align: center;
                margin-bottom: 2rem;
                color: var(--primary-color);
            }
            .otp-code {
                font-size: 2rem;
                font-weight: 600;
                text-align: center;
                margin: 2rem 0;
                padding: 1rem;
                background: #f8f9fa;
                border-radius: 4px;
                letter-spacing: 2px;
            }
            .message {
                color: #666;
                margin-bottom: 1rem;
            }
            .footer {
                font-size: 0.875rem;
                color: #888;
                text-align: center;
                margin-top: 2rem;
                border-top: 1px solid #eee;
                padding-top: 1rem;
            }
            """;
        
        return new StringBuilder()
            .append("<!DOCTYPE html>")
            .append("<html lang=\"en\">")
            .append("<head>")
            .append("<meta charset=\"UTF-8\">")
            .append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">")
            .append("<title>JobFinder OTP Verification</title>")
            .append("<style>")
            .append(CSS_STYLES)
            .append("</style>")
            .append("</head>")
            .append("<body>")
            .append("<div class=\"container\">")
            .append("<div class=\"logo\"><h1>JobFinder</h1></div>")
            .append("<h2>Verification Code</h2>")
            .append("<div class=\"message\">Hello ").append(name).append(", to complete your verification, please enter the following code:</div>")
            .append("<div class=\"otp-code\">").append(otp).append("</div>")
            .append("<p>This code will expire in 5 minutes for security purposes.</p>")
            .append("<p>If you didn't request this code, please disregard this email and contact support.</p>")
            .append("<div class=\"footer\">")
            .append("© 2024 JobFinder. All rights reserved.<br>")
            .append("This is an automated message, please do not reply.")
            .append("</div>")
            .append("</div>")
            .append("</body>")
            .append("</html>")
            .toString();
    }
}
