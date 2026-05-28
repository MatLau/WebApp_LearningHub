const url = "https://ycqfutbtlvxljqaljlro.supabase.co/rest/v1/profiles?select=*&limit=1";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljcWZ1dGJ0bHZ4bGpxYWxqbHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4ODMwMjMsImV4cCI6MjA5NTQ1OTAyM30.BW_7fyUVC7c3pYDr7pkEoNcWTjgM6CdL5Atqe8wmKEE";

async function run() {
  const response = await fetch(url, {
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`
    }
  });
  
  console.log("Status:", response.status);
  const data = await response.json();
  console.log("Data:", data);
}

run();
