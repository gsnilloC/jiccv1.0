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
    message = params[:message]

    ContactMailer.contact_email(name, email, message).deliver_now

    respond_to do |format|
      format.html { redirect_to root_path }
      format.js { render js: "window.location='#{root_path}'" }
    end
  end
end
