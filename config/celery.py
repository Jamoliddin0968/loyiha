from celery import Celery

import os 

os.environ.setdefault("DJANGO_SETTINGS_MODULE","loyiha_ishi.settings")

app = Celery("loyiha_ishi")
app.config_from_object("django.conf:settings",namespace = "CELERY")
app.autodiscover_tasks()