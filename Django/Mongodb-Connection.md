# Required Pakages

pip install django==3.2
pip install djongo==1.3.6
pip install pymongo==3.12.3
python -m pip install --upgrade pip
python -m pip install --upgrade setuptools


# For Local Setup

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'your_database_name',
        'ENFORCE_SCHEMA': False,
        'CLIENT': {
            'host': 'mongodb://localhost:27017/',  # MongoDB connection URL
        }
    }
}


# For Atlas Setup

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'your_database_name',
        'CLIENT': {
            'host': 'mongodb+srv://username:password@cluster0.avdfxtj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
            'authSource': 'admin',
        }
    }
}