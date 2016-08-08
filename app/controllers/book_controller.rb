class BookController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:upload]
  require 'sidekiq/api'

  def upload
    uploaded_io = params[:file]
    file_name = uploaded_io.original_filename
    book = Book.find_by(name: file_name)

    unless book && false
      File.open(Rails.root.join('public', 'uploads', file_name), 'wb') do |file|
        file.write(uploaded_io.read)
      end

      job = BookParserJob.perform_later file_name
      jid = job.provider_job_id

      render json: {job_id: jid}
    else
      render json: {message: 'file exists'}
    end
  end

  def jobs
    #Sidekiq.redis { |conn| conn.flushall }
    render json: Sidekiq::Stats.new
  end
end