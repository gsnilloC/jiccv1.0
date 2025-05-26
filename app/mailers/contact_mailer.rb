class ContactMailer < ApplicationMailer
  default to: "cgichohi2018@gmail.com", from: ENV["GMAIL_USERNAME"]

  def contact_email(name, email, subject, message)
    @name = name
    @email = email
    @subject = subject
    @message = message

    mail(subject: "Contact Form: #{subject}", reply_to: email)
  end
end
