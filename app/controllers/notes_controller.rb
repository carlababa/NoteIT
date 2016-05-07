class NotesController < ApplicationController
  def index
    @notes = Note.order(created_at: :desc)
    render json: {notes: @notes}
  
  end

  def show
    @note = Note.find(params[:id])
    render json: {note: @note}
  end

  def create
    @note = Note.new(note_params)

    if @note.save
      render json: {note: @note, location: note_url(@note)}, status: :created
    else
      render json: {errors: @note.errors}, status: :unprocessable_entity
    end
  end

  def update
    @note = Note.find(params[:id])
    if @note = update(note_params)
      render json: {note: @note}, status: :accepted
    else
      render json: {errors: @note.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @note = Note.find(params[:id])
    if @note.destroy
      render json: {task: nil}, status: :accepted
    else
      render json: {errors: @note.errors}, status: :unprocessable_entity
    end
  end

protected

  def note_params
    params.require(:note).permit(:title, :content)
  end
end
