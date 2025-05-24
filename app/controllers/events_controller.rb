class EventsController < ApplicationController
  def index
    @events = Event.all.order(date: :asc) # Fetch all events, ordered by date
  end

  def new
    @event = Event.new # Prepare a new event for the form
  end

  def create
    @event = Event.new(event_params) # Build a new event from form data
    if @event.save
      redirect_to events_path, notice: "Event was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    redirect_to events_path, notice: "Event was successfully deleted."
  end

  private

  def event_params
    params.require(:event).permit(:group, :name, :description, :time, :date)
  end
end
