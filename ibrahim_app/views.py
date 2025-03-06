from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.shortcuts import render
from django.http import JsonResponse
import smtplib
# Create your views here.


def home(request):
    return render(request, 'index.html')

def contact(request):
    if request.method == "POST":
        try:
            name = request.POST.get("name", "").strip()
            email = request.POST.get("email", "").strip()
            phone = request.POST.get("phone", "").strip()
            message = request.POST.get("message", "").strip()

            # Validate required fields
            if not name or not email or not message:
                return JsonResponse({"error": "Name, email, and message are required."}, status=400)

            # Email content
            email_subject = "Inquiry: Al Ibrahim Services"
            email_message = f"Name: {name}\nEmail: {email}\nPhone: {phone}\n\nMessage:\n{message}"

            print(f"Attempting to send email:\n{email_message}")  # Debugging

            # Send email using verified domain email
            send_mail(
                email_subject,       # Subject
                email_message,       # Message body
                "sales@alibrahimgroups.com",  # From (must be a verified email)
                ["sales@alibrahimgroups.com"],  # To (Company email)
                fail_silently=False,
            )

            return redirect(success)

        except smtplib.SMTPException as smtp_error:
            print(f"SMTP error occurred: {smtp_error}")
            return JsonResponse({"error": f"SMTP error: {str(smtp_error)}"}, status=500)
        
        except Exception as e:
            print(f"Unexpected error: {e}")
            return JsonResponse({"error": f"An error occurred: {str(e)}"}, status=500)

    return render(request, "contact-us.html")

def services(request):
    return render(request, 'services.html')

def success(request):
    return render(request, 'success.html')