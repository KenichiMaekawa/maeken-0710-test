json.array!(@hoges) do |hoge|
  json.extract! hoge, :id, :name, :location
  json.url hoge_url(hoge, format: :json)
end
