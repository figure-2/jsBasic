# Generated by Django 4.2.4 on 2023-08-31 01:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='actors',
            field=models.ManyToManyField(to='movies.actor'),
        ),
    ]
