# Generated by Django 4.0.3 on 2022-04-16 21:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('providers', '0002_remove_provider_services_provided_and_more'),
        ('patients', '0005_rename_latitude_address_latlng_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='patient',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='patients.patient'),
        ),
        migrations.AddField(
            model_name='note',
            name='provider',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='providers.provider'),
        ),
    ]
