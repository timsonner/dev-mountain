require('dotenv').config()

// const { connectionString } = process.env.CONNECTION_STRING
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
  dialectOptions: {
    ssl: {
      // require: true,
      rejectUnauthorized: false,
    },
  },
})

sequelize
  .authenticate()
  .then(() => {
    console.log('🟢 sequelize.authenticate()')
  })
  .catch((err) => {
    console.error('🔴 sequelize.authenticate():', err)
  })

// cities: city_id, name (alias ‘city), rating. countries: country_id, name (alias ‘country’). Make sure to spellcheck the aliases as well as the column names. Join the tables where country_id is equal.
module.exports = {
    getCities: (req, res) => {    
        sequelize
            .query(`SELECT city_id, cities.name AS city, rating, countries.country_id, countries.name AS country FROM countries INNER JOIN cities ON cities.country_id = countries.country_id ORDER BY rating DESC;
            `)
          .then((dbRes) => {
            res.status(200).send(dbRes[0])
            console.log('🟢 getCities()')
          })
          .catch((err) => console.log('🔴 getCities():', err))
    },
    
  deleteCity: (req, res) => {    
    sequelize
      .query(`DELETE FROM cities WHERE city_id = ${req.params.id};`)
      .then((dbRes) => {
        res.status(200).send(dbRes[0])
        console.log('🟢 deleteCity()')
      })
      .catch((err) => console.log('🔴 deleteCity():', err))
  },

  createCity: (req, res) => {
    const { name, rating, countryId } = req.body
    sequelize
      .query(
        `INSERT INTO cities(name, rating, country_id) VALUES ('${name}', ${rating}, ${countryId});`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0])
        console.log('🟢 createCity()')
      })
      .catch((err) => console.log('🔴 createCity()', err))
  },

  getCountries: (req, res) => {
    sequelize
      .query(`SELECT * FROM countries;`)
      .then((dbRes) => {
        res.status(200).send(dbRes[0])
        console.log('🟢 getCountries()')
      })
      .catch((err) => console.log('🔴 getCountries', err))
  },

  seed: (req, res) => {
    sequelize
      .query(
        `
            drop table if exists cities;
            drop table if exists countries;

            create table countries (
                country_id serial primary key, 
                name varchar
            );
            -- country_id: integer should match a country_id from the countries table.

            CREATE TABLE cities (
                city_id SERIAL PRIMARY KEY, 
                name varchar, 
                rating int, 
                country_id int,
                FOREIGN KEY (country_id) REFERENCES countries(country_id)
            );

            insert into countries (name)
            values ('Afghanistan'),
            ('Albania'),
            ('Algeria'),
            ('Andorra'),
            ('Angola'),
            ('Antigua and Barbuda'),
            ('Argentina'),
            ('Armenia'),
            ('Australia'),
            ('Austria'),
            ('Azerbaijan'),
            ('Bahamas'),
            ('Bahrain'),
            ('Bangladesh'),
            ('Barbados'),
            ('Belarus'),
            ('Belgium'),
            ('Belize'),
            ('Benin'),
            ('Bhutan'),
            ('Bolivia'),
            ('Bosnia and Herzegovina'),
            ('Botswana'),
            ('Brazil'),
            ('Brunei'),
            ('Bulgaria'),
            ('Burkina Faso'),
            ('Burundi'),
            ('Côte d''Ivoire'),
            ('Cabo Verde'),
            ('Cambodia'),
            ('Cameroon'),
            ('Canada'),
            ('Central African Republic'),
            ('Chad'),
            ('Chile'),
            ('China'),
            ('Colombia'),
            ('Comoros'),
            ('Congo'),
            ('Costa Rica'),
            ('Croatia'),
            ('Cuba'),
            ('Cyprus'),
            ('Czech Republic'),
            ('Democratic Republic of the Congo'),
            ('Denmark'),
            ('Djibouti'),
            ('Dominica'),
            ('Dominican Republic'),
            ('Ecuador'),
            ('Egypt'),
            ('El Salvador'),
            ('Equatorial Guinea'),
            ('Eritrea'),
            ('Estonia'),
            ('Eswatini'),
            ('Ethiopia'),
            ('Fiji'),
            ('Finland'),
            ('France'),
            ('Gabon'),
            ('Gambia'),
            ('Georgia'),
            ('Germany'),
            ('Ghana'),
            ('Greece'),
            ('Grenada'),
            ('Guatemala'),
            ('Guinea'),
            ('Guinea-Bissau'),
            ('Guyana'),
            ('Haiti'),
            ('Holy See'),
            ('Honduras'),
            ('Hungary'),
            ('Iceland'),
            ('India'),
            ('Indonesia'),
            ('Iran'),
            ('Iraq'),
            ('Ireland'),
            ('Israel'),
            ('Italy'),
            ('Jamaica'),
            ('Japan'),
            ('Jordan'),
            ('Kazakhstan'),
            ('Kenya'),
            ('Kiribati'),
            ('Kuwait'),
            ('Kyrgyzstan'),
            ('Laos'),
            ('Latvia'),
            ('Lebanon'),
            ('Lesotho'),
            ('Liberia'),
            ('Libya'),
            ('Liechtenstein'),
            ('Lithuania'),
            ('Luxembourg'),
            ('Madagascar'),
            ('Malawi'),
            ('Malaysia'),
            ('Maldives'),
            ('Mali'),
            ('Malta'),
            ('Marshall Islands'),
            ('Mauritania'),
            ('Mauritius'),
            ('Mexico'),
            ('Micronesia'),
            ('Moldova'),
            ('Monaco'),
            ('Mongolia'),
            ('Montenegro'),
            ('Morocco'),
            ('Mozambique'),
            ('Myanmar'),
            ('Namibia'),
            ('Nauru'),
            ('Nepal'),
            ('Netherlands'),
            ('New Zealand'),
            ('Nicaragua'),
            ('Niger'),
            ('Nigeria'),
            ('North Korea'),
            ('North Macedonia'),
            ('Norway'),
            ('Oman'),
            ('Pakistan'),
            ('Palau'),
            ('Palestine State'),
            ('Panama'),
            ('Papua New Guinea'),
            ('Paraguay'),
            ('Peru'),
            ('Philippines'),
            ('Poland'),
            ('Portugal'),
            ('Qatar'),
            ('Romania'),
            ('Russia'),
            ('Rwanda'),
            ('Saint Kitts and Nevis'),
            ('Saint Lucia'),
            ('Saint Vincent and the Grenadines'),
            ('Samoa'),
            ('San Marino'),
            ('Sao Tome and Principe'),
            ('Saudi Arabia'),
            ('Senegal'),
            ('Serbia'),
            ('Seychelles'),
            ('Sierra Leone'),
            ('Singapore'),
            ('Slovakia'),
            ('Slovenia'),
            ('Solomon Islands'),
            ('Somalia'),
            ('South Africa'),
            ('South Korea'),
            ('South Sudan'),
            ('Spain'),
            ('Sri Lanka'),
            ('Sudan'),
            ('Suriname'),
            ('Sweden'),
            ('Switzerland'),
            ('Syria'),
            ('Tajikistan'),
            ('Tanzania'),
            ('Thailand'),
            ('Timor-Leste'),
            ('Togo'),
            ('Tonga'),
            ('Trinidad and Tobago'),
            ('Tunisia'),
            ('Turkey'),
            ('Turkmenistan'),
            ('Tuvalu'),
            ('Uganda'),
            ('Ukraine'),
            ('United Arab Emirates'),
            ('United Kingdom'),
            ('United States of America'),
            ('Uruguay'),
            ('Uzbekistan'),
            ('Vanuatu'),
            ('Venezuela'),
            ('Vietnam'),
            ('Yemen'),
            ('Zambia'),
            ('Zimbabwe');

            -- Extra credit:
            -- USA country_id is 187
            
            INSERT INTO cities(name, rating, country_id) VALUES ('Missoula', 3, 187);
            INSERT INTO cities(name, rating, country_id) VALUES ('Darby', 4, 187);
            INSERT INTO cities(name, rating, country_id) VALUES ('Sula', 5, 187); 

        `
      )
      .then(() => {
        console.log('DB seeded!')
        res.sendStatus(200)
      })
      .catch((err) => console.log('error seeding DB', err))
  },
}
