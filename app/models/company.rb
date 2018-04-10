class Company < ApplicationRecord
  
  searchkick text_start: [‘name’]
  
  
end
