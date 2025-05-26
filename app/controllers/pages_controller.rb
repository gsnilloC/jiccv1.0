class PagesController < ApplicationController
  def home
    @events = Event.all.order(date: :asc)
  end

  def about
  end

  def ministries
  end

  def events
  end

  def sermons
  end

  def contact
  end

  def giving
  end

  def contact_submit
    name = params[:name]
    email = params[:email]
    subject = params[:subject]
    message = params[:message]

    ContactMailer.contact_email(name, email, subject, message).deliver_now
    flash[:notice] = "Your message has been sent!"
    redirect_to root_path
  end
end
