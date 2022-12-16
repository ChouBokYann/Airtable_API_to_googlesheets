from pyairtable import Api, Base, Table
import json as json

api = Api('keytaeaITSkfJNeG7')
api.all('Malaysia CSO', 'CSO Form')

base = Base('keytaeaITSkfJNeG7', 'Malaysia CSO')
base.all('CSO Form')

table = Table('keytaeaITSkfJNeG7', 'Malaysia CSO', 'CSO Form')
table.all()