# from supabase import create_client
# import os

# SUPABASE_URL = os.getenv("SUPABASE_URL")
# SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

# supabase = create_client(SUPABASE_URL, SUPABASE_KEY)


import os
from supabase import create_client
from dotenv import load_dotenv

load_dotenv() # This loads variables from your .env file

# Ensure these match the labels in the "Data API" tab specifically
url = os.getenv("SUPABASE_URL") 
key = os.getenv("SUPABASE_SERVICE_KEY") # This MUST be the service_role key

if not url or not key:
    raise ValueError("Supabase credentials missing! Check your .env file.")

supabase = create_client(url, key)