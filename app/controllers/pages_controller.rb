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
end
