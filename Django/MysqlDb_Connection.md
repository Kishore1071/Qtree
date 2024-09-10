# Required Pakages

pip install mysqlclient


# Dabase Setup

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'database_name',
        'USER': 'root',
        'PASSWORD': 'your_password',
        'HOST':'localhost',
        'PORT':'3306',
    }
}