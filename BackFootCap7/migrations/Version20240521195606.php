<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240521195606 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cancha ADD created_at DATETIME DEFAULT NULL, ADD created_by INT DEFAULT NULL, ADD modified_at DATETIME DEFAULT NULL, ADD modified_by INT DEFAULT NULL, ADD deleted_at DATETIME NOT NULL, ADD deleted_by INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cancha DROP created_at, DROP created_by, DROP modified_at, DROP modified_by, DROP deleted_at, DROP deleted_by');
    }
}
