# Generated by Django 4.0.3 on 2022-04-13 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('providers', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='provider',
            name='services_provided',
        ),
        migrations.AddField(
            model_name='provider',
            name='provides_bt',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='provider',
            name='provides_ot',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='provider',
            name='provides_pt',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='provider',
            name='provides_st',
            field=models.BooleanField(default=False),
        ),
    ]
