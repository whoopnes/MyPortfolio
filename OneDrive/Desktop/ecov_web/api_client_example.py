import requests
from pydantic import BaseModel, EmailStr
from typing import Optional, List
import random

class EmailRequest(BaseModel):
    to: EmailStr
    from_email: Optional[EmailStr] = None
    subject: str
    body: str
    html: Optional[str] = None
    cc: Optional[List[EmailStr]] = None
    bcc: Optional[List[EmailStr]] = None

def send_email(email: EmailRequest, token: str):
    url = "http://52.230.88.220:16251/send-email"
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.post(
        url,
        json=email.dict(),
        headers=headers
    )
    response.raise_for_status()
    return response.json()

if __name__ == "__main__":
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlbWFpbC1zbXRwIiwiZXhwIjoyMDYxOTAxODAyfQ.-rN84U1-CH8WKmdpH415-a0KR1P9klLKQaD9noh0Z4U"

    try:
        with open("mail.html", "r", encoding="utf-8") as f:
            html_content = f.read()
    except FileNotFoundError:
        print("HTML file not found.")
        exit(1)

    otp_code = random.randint(100000, 999999)
    html_content = html_content.replace("{{otp_code}}", str(otp_code))

    email = EmailRequest(
        to="dwdgbinus@dwdgbinus.com",
        subject="OTP Code",
        body="",
        html=html_content,
        # cc=["cc1@example.com", "cc2@example.com"],
        # bcc=["bcc@example.com"]
    )

    try:
        result = send_email(email, token)
        print("Email sent successfully:", result)
    except Exception as e:
        print("Failed to send email:", str(e))
