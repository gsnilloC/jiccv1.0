class ContactMailer < ApplicationMailer
  default to: "cgichohi2018@gmail.com", from: ENV["GMAIL_USERNAME"]

  def contact_email(name, email, message)
    @name = name
    @email = email
    @message = message

    mail(subject: "Contact Form: #{name}", reply_to: email)
  end
end
