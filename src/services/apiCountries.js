const BASE_URL = "https://api.restcountries.com/";

export async function getCountries(query = "", region = "") {
  let urlCountries;

  if (query && region)
    urlCountries = `${BASE_URL}countries/v5?q=${query}&region=${region}`;
  if (query && !region) urlCountries = `${BASE_URL}countries/v5?q=${query}`;
  if (region && !query)
    urlCountries = `${BASE_URL}countries/v5?region=${region}`;
  if (!query && !region) urlCountries = `${BASE_URL}countries/v5?limit=100`;

  const res = await fetch(urlCountries, {
    headers: {
      Authorization: "Bearer rc_live_b5d958c4354a400a988c65add70062bb",
    },
  });

  const data = await res.json();

  return data;
}

export async function getCountry(name) {
  const res = await fetch(
    `${BASE_URL}countries/v5/names.common/${encodeURIComponent(name)}`,
    {
      headers: {
        Authorization: "Bearer rc_live_ee547835fce748bdba133b9be094337c",
      },
    },
  );

  const data = await res.json();

  return data;
}

export async function getBorders(code) {
  const res = await fetch(
    `${BASE_URL}countries/v5/borders/${encodeURIComponent(code)}`,
    {
      headers: {
        Authorization: "Bearer rc_live_ee547835fce748bdba133b9be094337c",
      },
    },
  );

  const data = await res.json();

  return data;
}
